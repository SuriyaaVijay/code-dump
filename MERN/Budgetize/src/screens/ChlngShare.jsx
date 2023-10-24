import React, { useState, useEffect, useContext } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { AuthData } from "../context/AuthContext.jsx";
import Fab from "@mui/material/Fab";
import ErrorDialogBox from "../components/ErrorDialogBox";


// import "../styles/globalStyles.css"

function ChlngShare(props) {
  // console.log(props)
  const { u_id1, u_id2 } = useParams();
  const navigate = useNavigate();
  const { value1, value2, value3 } = useContext(AuthData);
  const  [userData,setUserData]  = value3;
  const [isError,setError] = useState(false);

  // Web Share API
      const shareData = {
          title: "Budgetize Friendly Challenge!",
          text: `${u_id1} has opted you for a friendly challenge.Click the below link to know more..<br>`,
          // url: "https://nb-memories.netlify.app",
          url: `https://budgetize-rho.vercel.app/challenge/${u_id1}/to/`,
        };

    
        async function handleChallengeBtn() {
          try {
              console.log("Opening Web Share")
            await navigator.share(shareData);
            console.log("WebSite Shared Successfully");
         

          } catch (err) {
            console.log(`Error: ${err}`);
          }
        }

//   console.log(authToken)

  return (
    <>
      <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
        className="challengeScreen"
      >
        <h3
          style={{
            margin: "10px 0",
            textAlign: "center",
          }}
        >
          Hello {u_id1.charAt().toUpperCase() + u_id1.slice(1)} !
        </h3>
        <h3
          style={{
            margin: "10px 0",
            textAlign: "center",
          }}
        >
          Budgetize Friendly Challenge for You !
        </h3>

        <p
          style={{
            marginTop: "5px",
            color: "red",
          }}
        >
          About Challenge !
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/challenge-rules.png"
            alt="Guideliness"
            style={{
              height: "150px",
              width: "150px",
            }}
          />
        </div>

        <div className="guidelines">
          <ul>
            <li >
              This is a challenge centered around your monthly expenses. We will
              monitor your and your friend's monthly expenses and provide daily
              updates based on the information you provided.
            </li>
            <li >
              This challenge relies entirely on the data provided by you, the
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
        <Fab onClick={ 
          ()=>{
          // return 
          userData.user.challenge_id.length <5 ? handleChallengeBtn() : setError(true) 
        }} style={{
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
                    }}>Challenge your friend</Fab>
        </div>
      </div>

    {
      isError && <ErrorDialogBox/>
    } 

    </>
  );
}

export default ChlngShare;
