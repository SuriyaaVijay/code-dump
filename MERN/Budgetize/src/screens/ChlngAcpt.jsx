import React,{useState,useEffect,useContext} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { AuthData } from "../context/AuthContext.jsx";
import Fab from "@mui/material/Fab";
import axios from "axios";

function ChlngAcpt(props){
    // console.log(props)
    const { u_id1,u_id2 } = useParams();
    const navigate = useNavigate();
    const { value1, value2 ,value3 , value4} = useContext(AuthData);
    const  [userData,setUserData]  = value3;
    const [challenger,setChallenger] = value4;
  


    var token = localStorage.getItem('token');

// Api Calling - Post Request to server side with Two User Names.. ( Friendly Challenge)
async function handleSubmit(){

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const data= {
      u_id1:u_id1,
      u_id2:u_id2
    }
    const body = JSON.stringify(data);
    console.log(data)
    await axios
      .post(
        // `http://localhost:3001/budgetize/users/challenge`,
        `https://starfish-app-uva3q.ondigitalocean.app/budgetize/users/challenge`,
        body,
        config
      )
      .then((res) => {
        console.log(res)
        console.log(res.data);
       console.log("done");
       setChallenger(res.data.result1);
       navigate("/")
      });
}catch (err) {
  console.log("error ", err.res.data);
}
}




    return <>

        <div style={{
            padding:"30px"
        }}>
            {/* <h3>Hey {u_id2.charAt().toUpperCase() + u_id2.slice(1)} !</h3> */}
            <h3  style={{
            margin: "10px 0",
            textAlign: "center",
          }}>Hey {u_id2.charAt().toUpperCase() + u_id2.slice(1)} !</h3>

            <h3  style={{
            margin: "10px 0",
            textAlign: "center",
          }}>You've a challenge Request from {u_id1}</h3>
            <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/bump-fist.png"
            alt="Guideliness"
            style={{
              height: "200px",
              width: "200px",
              margin:"-35px 0"
            }}
          />
        </div>
        <p
          style={{
            marginTop: "5px",
            color: "red",
          }}
        >
          About Challenge !
        </p>
        <div className="guidelines">
          <ul>
            <li>{u_id1}, your friend, is invited you to join in this budgetize friendly challenge.This challenge involves monitoring your and your friend's monthly expenses and providing daily updates based on the information you provide.</li>
            <li>This challenge relies entirely on the data provided by you, the
              users. It is possible for anyone to falsify their expense records,
              but that goes against the purpose of the challenge. Therefore,
              please be honest and enjoy participating in the challenge.
              </li>
              <li>
              The challenge can commence on any day, but it will conclude and
              provide results on the 30th of each month. Please note that all
              these features are in beta and have not been thoroughly tested
              with proper equipment. If you encounter any issues, we kindly
              request you to contact the developer.
            </li>
            <li >
              For certain reasons, we are unable to include any rewards or
              points system for the winners at the moment. However, you can
              expect to see this feature in upcoming updates. Regardless of who
              emerges as the winner, please accept our advance congratulations
            </li>
            <p style={{
              textAlign:"center",
              fontSize:"18px",
              fontWeight:"600",
              margin:"12px 0"
            }}>Be Honest and Have Fun !</p>
          </ul>
        </div>
        <div style={{
            display:'flex',
            justifyContent:"space-evenly",
            marginTop:"5px"
        }}>
        <Fab onClick={()=>{
          navigate("/")
        }}
        style={{
            backgroundColor:"white",
            borderRadius:"8px",
            // marginRight:"3px",
            width:"100px",
            height:"40px",
            textTransform:"capitalize",
            border:"solid #5cf520 1px",
            boxShadow:"none",
            fontSize:"17px",
            fontWeight:"600",
            fontFamily:"'Cabin',sans-serif"
                    }}>Cancel</Fab>
        <Fab  onClick={handleSubmit} style={{
            backgroundColor:"#69ff8f",
            borderRadius:"8px",
            // marginLeft:"3px",
            width:"200px",
            height:"40px",
            textTransform:"capitalize",
            border:"solid black 1px",
            boxShadow:"none",
            fontSize:"17px",
            fontWeight:"600",
            fontFamily:"'Cabin',sans-serif"
                    }}>Accept Challenge</Fab>
        </div>
        </div>
    </>
}

export default ChlngAcpt;