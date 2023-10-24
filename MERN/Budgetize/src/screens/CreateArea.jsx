import React, { useState, useContext, useEffect } from "react";

import axios from "axios";

import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from "@mui/material/CircularProgress";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";


import { AuthData } from "../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import CreateScreen from "./CreateScreen.jsx";
import ShortCard from "../components/ShortCard.jsx";
import Header from "../components/Header.jsx";
import SlideLeft from "../components/SlideLeft.jsx";

import BottomBar from "../components/BottomBar";
import  "../styles/createArea.css";

function CreateArea() {

  const { value1, value2 ,value3} = useContext(AuthData);
  const [date, setDate] = value1;
  const  [userData,setUserData]  = value3;

  const navigate = useNavigate();

  const [allLedger, setAllLedger] = useState([]);

  const [isOpenLedger, setOpenLedger] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [isLoading,setLoading]=useState(true);
  const [hasMore,setHasMore]=useState(true);
  const [pageNo,setPageNo]=useState(1);
  const [invalidDate,setInvalidDate]=useState(false);
  
  const [deleteStatus,setDeleteStatus] = useState({
    loading:false,
    deleted:false
  })
  const [searchStatus,setSearchStatus] = useState({
    foundError:false
  })
  
  var token = localStorage.getItem('token');


  var todayDate = new Date();

  var currentDate = todayDate.getDate();
  var currentMonth = (todayDate.getUTCMonth()+1);
  var currentYear = todayDate.getFullYear();
 


  function handleSearchChange(e) {
    const { value, name } = e.target;
    console.log(value);
    // setSearchDate(value)
    var enteredDate = parseInt(value.slice(8,10));
    var enteredMonth = parseInt(value.slice(5,7));
    var enteredYear = parseInt(value.slice(0,4));

    if (enteredYear > currentYear) {
      console.log(value.slice(0, 4));
      console.log("Invalid Year");
      setInvalidDate(true)
      setInterval(()=>{
        setInvalidDate(false);
      },2000)
    } else if (enteredMonth >= currentMonth) {
      if (enteredDate > currentDate) {
        console.log(value.slice(8, 10));
        console.log("Invalid Month");
        setInvalidDate(true);
        
        setInterval(()=>{
          setInvalidDate(false);
        },2000)
      } else {
        console.log("valid Month");
        getSearchedLedger(value);
        console.log("should work")
      }
    } else {
      console.log("no problem");
      console.log("should work")
      getSearchedLedger(value);  
    }
    
    // navigate("/createfield")
    // setCSActive(true);
  }


  function handleAddChange(e) {
    const { value, name } = e.target;

    var enteredDate = parseInt(value.slice(8,10));
    var enteredMonth = parseInt(value.slice(5,7));
    var enteredYear = parseInt(value.slice(0,4));

    if (enteredYear > currentYear) {
      console.log(value.slice(0, 4));
      console.log("Invalid Year");
      setInvalidDate(true)
      setInterval(()=>{
        setInvalidDate(false);
      },2000)
    } else if (enteredMonth >= currentMonth) {
      if (enteredDate > currentDate) {
        console.log(value.slice(8, 10));
        console.log("Invalid Month");
        setInvalidDate(true);
        
        setInterval(()=>{
          setInvalidDate(false);
        },2000)
      } else {
        console.log("valid Month");
        setDate(value);
        navigate("/createfield");
      }
    } else {
      console.log("no problem");
      setDate(value);
      navigate("/createfield");
    }
    
    // setCSActive(true);
  }


  async function getSearchedLedger(searchedDate) {

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      await axios
        .get(
          // `http://localhost:3001/budgetize/search/${searchedDate}/${userData.user.u_id}`,
          `https://starfish-app-uva3q.ondigitalocean.app/budgetize/search/${searchedDate}/${userData.user.u_id}`,
         config )
        .then((res) => {
          console.log(res.data);
          // setAllLedger(res.data.result)
          if(res.data.results.length===0){
            setInvalidDate(true);

            setInterval(()=>{
              setInvalidDate(false);
            },2000)
          }else{
            setSelectedPost(...res.data.results)

            setOpenLedger(true)
          }
        });
    } catch (err) {
      console.error("error ", err.res.data);
    }
  }
console.log(selectedPost) 

// Function to open the Ledger Bottom Sheet and set the selected ledger in state
  function openLedger(id) {
    console.log(id);
    setOpenLedger(true);
    allLedger.map((singleData) => {
      if (singleData._id === id) {
        setSelectedPost(singleData);
        
      }
    });
  }

 async function handleDelete(){
  setDeleteStatus({loading:true})
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    await axios
      .delete(
        // `http://localhost:3001/budgetize/delete/${selectedPost._id}/${userData.user.u_id}/${selectedPost.totalPerday}/${selectedPost.ledgerDate}`,
        `https://starfish-app-uva3q.ondigitalocean.app/budgetize/delete/${selectedPost._id}/${userData.user.u_id}/${selectedPost.totalPerday}/${selectedPost.ledgerDate}`,
        // body,
        config
      )
      .then((res) => {
       
        setDeleteStatus({loading:false})
        setDeleteStatus({deleted:true})
        setAllLedger(res.data.results);

      });
      setTimeout(()=>{

        setOpenLedger(false);
        setDeleteStatus({deleted:false})
      },2000)
     
}catch (err) {
  console.error("error ", err.res.data);
}
 }

// Infinite Scrolling
useEffect(()=>{
     
  window.addEventListener("scroll",handleScroll);
  return ()=> window.removeEventListener("scroll",handleScroll);
 
},[])

const handleScroll = ()=>{
  
if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
  setLoading(false);
  setPageNo((prev)=> prev+1);
}
}

// UseEffect for Infinite Scrolling

useEffect( ()=>{
  hasMore &&  setLoading(true);
  async function getAllLedger() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
    //  const res = await axios.get(
    //     // `http://localhost:3001/budgetize/allLedger/${pageNo}/${userData.user.u_id}`,
    //     `https://starfish-app-uva3q.ondigitalocean.app/budgetize/allLedger/${pageNo}/${userData.user.u_id}`,
    //     config
    //   );

      const res = await axios.get(
       // `http://localhost:3001/budgetize/allLedger/${pageNo}/${userData.user.u_id}`,
        `https://starfish-app-uva3q.ondigitalocean.app/budgetize/allLedger/${pageNo}/${userData.user.u_id}`,
        config
      );

      console.log(res.data.results)

      setLoading(false);
      setAllLedger((prevData)=>{
        console.log(prevData)
       return [...prevData,...res.data.results] 
      });

      if(res.data.results.length===0){
        console.log("end!!!!!!!")
        setHasMore(false);
      }
    } catch (err) {
      console.error("error ", err.res.data);
    }
  }
  hasMore &&  getAllLedger();
},[pageNo])

// useEffect(()=>{
//   if(authToken===undefined){
//     navigate("/login")
//   }
// },[])


  return (
    <>
      <Header />
      <div class="createArea-Head">
        <Fab aria-label="search" className="headerIcon">
          <SearchIcon
            onClick={() => {
              var inputDate = document.getElementById("searchMyDate");
              inputDate.showPicker();
            }}
          />
        </Fab>
        <Fab aria-label="add" className="headerIcon">
          <AddIcon
            onClick={() => {
              var inputDate = document.getElementById("myDate");
              inputDate.showPicker();
            }}
          />
        

          <input
            type="date"
            id="myDate"
            name="date"
            onChange={handleAddChange}
            style={{ display: "none" }}
          />
          <input
            type="date"
            id="searchMyDate"
            name="searchDate"
            // value={}
            onChange={handleSearchChange}
            style={{ display: "none" }}
          />
        </Fab>
      </div>




      <div
        style={{
          marginTop: "70px",
          height: "79vh",
        }}
      class={`card-body ${isOpenLedger ? `active` : ``}`}>
        {allLedger.map((singleData, index) => {
          
          return (
            <ShortCard
              openLedger={openLedger}
              date={singleData.ledgerDate}
              money={singleData.totalPerday}
              id={singleData._id}
              expenses={singleData.expenses}
            />
          );
        })}
      
         { isLoading &&  <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
          <Skeleton variant="rounded" style={{
            margin:"8px 0",
            borderRadius:"12px",
          }} width={"90%"} height={60} />
          <Skeleton variant="rounded" style={{
            margin:"8px 0",
            borderRadius:"12px",
          }} width={"90%"} height={60} />
          <Skeleton variant="rounded" style={{
            margin:"8px 0",
            borderRadius:"12px",
          }} width={"90%"} height={60} />
          <Skeleton variant="rounded" style={{
            margin:"8px 0",
            borderRadius:"12px",
          }} width={"90%"} height={60} />
          
        
          </div>}

        { hasMore ? null : <p style={{
          textAlign:"center",
          fontSize:"1.4rem",
          color:"red",
          paddingBottom:"100px"
        }}>The End !</p>}  
      </div>
     
      
      <Snackbar open={invalidDate }>
        <SnackbarContent
          style={{
            backgroundColor: "rgb(255, 81, 81)",
            color: "white",
            lineHeight:"1",
            fontSize:"1.2rem",
            display: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            margin: "0% 26%",
            marginBottom: "27%",
          }}
          message={<span id="client-snackbar">Invalid Date</span>}
        />
      </Snackbar>

      <BottomBar />

      {/* {isOpenLedger && ( */}
        <div
          style={{
            position: "relative",
            zIndex: 11011,
          }}
        >
          <div class={`bottom-sheet ${isOpenLedger && !invalidDate ? `active` : ``}`}>
            <div
              style={{
                width: "100%",
                height: "8px",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => {
                setOpenLedger(false);
                setSelectedPost();
              }}
            >
              <hr
                style={{
                  background: "grey",
                  borderRadius: "16px",
                  width: "20%",
                }}
              ></hr>
            </div>

            <div
              style={{
                padding: "20px 0",
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Spent On</h3>
              <h3>Amount</h3>
            </div>
          
            { isOpenLedger && !invalidDate ?selectedPost.expenses.flat(1).map((expense) => {
              
              return (
                <div
                  style={{
                    margin: "5px 0",
                    width: "70%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>{expense.spentOn}</h4>
                  <h4>{expense.amount}</h4>
                </div>
              );
            }) : null}

            <div
              style={{
                margin: "10px 0 40px 0",
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Total</h3>
              <h3>{isOpenLedger && !invalidDate ?selectedPost.totalPerday:null}</h3>
            </div>
            <div style={{
              position:"absolute",
              left:"5%",
              bottom:"10%"
            }}>
            <Fab style={{
              backgroundColor:"rgb(255, 81, 81)",
              color:"white",
              borderRadius:"20%",
              height:"50px",
              width:"50px"
            }} onClick={handleDelete}>
            

              { deleteStatus.loading ? <CircularProgress style={{
                color:"white",
                height:"30px",
                width:"30px"
                }}

                /> : deleteStatus.deleted ? <CheckRoundedIcon /> : <DeleteIcon style={{
                fontSize:"1.7rem",
              }}/> }
            </Fab>
            
            <Snackbar open={deleteStatus.deleted } TransitionComponent={SlideLeft} style={{
              bottom:"10%",
              left:"10%"
            }}>
        <SnackbarContent
          style={{
            backgroundColor: "rgb(231 219 219)",
            color: "rgb(255, 81, 81)",
            border:"solid rgb(255, 81, 81) 2px",
            lineHeight:"1",
            fontFamily: "Cabin, sans-serif",
            fontSize:"1.2rem",
            fontWeight:"bolder",
            display: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            margin: "0% 10% 0% 15%",
            boxShadow:"none"
          }}
          message={
            deleteStatus.deleted ?   <span id="client-snackbar"> Deleted Successfully!</span> : null}
        />
      </Snackbar>
      
            </div>
          </div>
        </div>
      {/* )} */}
      
    </>
  );
}

export default CreateArea;
