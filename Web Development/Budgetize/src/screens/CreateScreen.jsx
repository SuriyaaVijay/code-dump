import React, { useState, useContext, useEffect } from "react";

import { AuthData } from "../context/AuthContext.jsx";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import ReplyAmount from "./ReplyAmount.jsx";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";


function CreateScreen() {
  
const component = (
  <tr>
    <th>
      <input
        placeholder="Spent On..."
        name="spentOn"
        onChange={handleChange}
        autoComplete="off"
      ></input>
    </th>
    <td>
      <input
        name="amount"
        type="number"
        placeholder="₹"
        onChange={handleChange}
        autoComplete="off"
      ></input>
    </td>
  </tr>
);

  const [singleExpense, setExpense] = useState({
    spentOn: "",
    amount: "",
  });
  const [ledger, setLedger] = useState([]);
  const [components, setComponents] = useState([]);
  const [inputEmpty, setEmpty] = useState(false);
  const [isReplyAmount, setReplyAmount] = useState(false);

  const { value1, value2,value3 } = useContext(AuthData);
  const [totalPerDay,setTotal] = value2;
  const [date,setDate] = value1;
  const  [userData,setUserData]  = value3;
  
  var total = 0;

  var token = localStorage.getItem('token');



  // Handle Change function is for getting the input values from event handlers
  function handleChange(e) {
    const { value, name } = e.target;
    setExpense((prevLedger) => {
      return { ...prevLedger, [name]: value };
    });
    setEmpty(false);

    // console.log(singleExpense)
  }


  // Function Handle AddBtn if to add another input component and add the above entered value in the ledger array if the above input fields are filled, otherwise change the error condtion to true.
  function handleAddBtn() {
    if (singleExpense.spentOn === "" || singleExpense.amount === "") {
      setEmpty(true);

    } else {
      
      setComponents((components) => [...components, component]);
      setLedger((prevLedger) => {
        return [...prevLedger, singleExpense];
      });
      setExpense({
        spentOn: "",
        amount: "",
      });
    }
  }

  //  Function Handle TickBtn is to make a api call with spreaded previous state ledger and the current singleExpense object if the extra input element was not added.
  //  Call the calc function with spreaded ledger and current single Expense object as parameters.
  //  If the user submitted tick btn with extra input element , do the same api calling but only with the spreaded ledger array ,totalPerDay , ledgerDate
  function handleTickBtn() {
    if (singleExpense.spentOn !== "" || singleExpense.amount !== "") {
      // setLedger((prevLedger) => {
      //   return [...prevLedger, singleExpense];
      // });   

      var returnedTotal = calc([ ...ledger,singleExpense ])
      addBudget({expenses : [ ...ledger,singleExpense ],totalPerDay:returnedTotal,ledgerDate:date});
      // setReady(true)
       
    }else{
      var returnedTotal = calc([...ledger])
      addBudget({expenses : [ ...ledger ],totalPerDay:returnedTotal,ledgerDate:date})
        // setTotal(total)
    }
    // setTotalAmount(true)
  

}

// Function calc is to calculate the totalPerDay using array map method.
function calc(data){
  data.map((singleLedger) => {
    // console.log(singleLedger);
    total += Number(singleLedger.amount);
    // console.log(total);
    
  })
  setTotal(total)
  document.querySelector(".createScreen").scrollTo(0,0);
  setReplyAmount(true);
  return total
}

// Api Calling - Post Request to server side with body date. ( Add Budget )
  async function addBudget(data){
    console.log(data)
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const body = JSON.stringify(data);
      console.log(data)
      await axios
        .post(
          // `http://localhost:3001/budgetize/add/${userData.user.u_id}`,
          `https://starfish-app-uva3q.ondigitalocean.app/budgetize/add/${userData.user.u_id}`,
          body,
          config
        )
        .then((res) => {
          console.log(res)
          console.log(res.data);
          // if(res.data.errorMessage==="Duplicate Key"){
          //   console.log("Date is Already Exist")
          // }

          // res.data.result2 && setUserData(
          //   {
          //     currentAmount:userData.user.currentAmount+ res.data.updatedUser.currentAmount
          //   }
          // ) 
        });
  }catch (err) {
    // console.log("error ", err.res.data);
      // if(err)
      // console.log(err.response.status)
      if(err.response.status===409){
        console.log("Duplicate Date")
        
      }
  }
}

 
 

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          top: "0%",
          backgroundColor: "white",
          zIndex: 10000,
          overflowY:"scroll"
        }}
        className={`createScreen ${isReplyAmount ? 'active' : ''}`}
      >
        <div
          style={{
            padding: "40px 20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
            }}
          >
            {date}
          </h2>
        </div>
        <table class="table">
          <tr>
            <th>
              <input
                placeholder="Spent On..."
                name="spentOn"
                onChange={handleChange}
                autoComplete="off"
                required
              ></input>
            </th>
            <td>
              <input
                name="amount"
                type="number"
                onChange={handleChange}
                placeholder="₹"
                autoComplete="off"
                required
              ></input>
            </td>
          </tr>
          {/* { components.map((component,index) => component)} */}
          {components.map((component, index) => {
            return component;
          })}
        </table>
        {inputEmpty && (
          <p
            style={{
              textAlign: "center",
              fontSIze: "1.2rem",
              margin: "20px 0",
              fontWeight: 700,
              color: "red",
            }}
          >
            Please Enter the Above Fields.
          </p>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Fab
            onClick={handleAddBtn}
            style={{
              backgroundColor: "#5cf520",
              color: "white",
              position: "absolute",
              right: "7%",
              bottom: "170px",
            }}
          >
            <AddIcon />
          </Fab>
          <Fab
            onClick={handleTickBtn}
            style={{
              backgroundColor: "#5cf520",
              color: "white",
              position: "absolute",
              right: "7%",
              bottom: "100px",
            }}
          >
            <CheckRoundedIcon />
          </Fab>
        </div>
        { isReplyAmount &&  <ReplyAmount/> }

       

      </div>
      
    </>
  );
}

export default CreateScreen;
