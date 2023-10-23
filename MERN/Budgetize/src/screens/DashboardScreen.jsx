import React, { useState, useContext ,useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Button from "@mui/material/Button";

import axios from "axios";

import Gauge from "../components/Gauge.jsx";
import ShortCard from "../components/ShortCard.jsx";
import {Link,useNavigate} from "react-router-dom";
import BottomBar from "../components/BottomBar";
import ChallengeContainer from "../components/ChallengeContainer";

import { AuthData } from "../context/AuthContext.jsx";
import { SwipeContext } from "../context/AuthContext.jsx";

// import styles from "../styles/globalStyles.css";

function DashboardScreen() {

  const { value1, value2 ,value3,value4} = useContext(AuthData);

  const  [userData,setUserData] = value3;
  const [selectedChallenge,setChallenge] = value4;
  const navigate = useNavigate();



  var maxLimit = userData.user.maxLimit ;
  var currentAmount = userData.user.currentAmount;

  var spendPercent = Math.round((currentAmount / maxLimit) * 100);
  var progress = (spendPercent*3.6)+"deg";
  if(userData.user.currentAmount >= userData.user.maxLimit ){
      spendPercent = 100
      progress = (spendPercent*3.6)+"deg";
  }
  console.log(progress)
  var todayDate = new Date();
  todayDate=todayDate.toString()
  var chlng_start_date ;

  

  const [data,setData] = useState([]);
  const [currentUserScore,setCurrentUserScore]=useState()
  // const [challenges,setChallenges]=useState([]);
  const [activeChallenges,setActiveChallenges]=useState([]);
  const [completedChallenges,setCompletedChallenges]=useState([]);
  
  var active = [];
  var completed = [];
  var token = localStorage.getItem('token');


    console.log(userData.user)


  // async function getRecent(){
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //   };
  //   try {
  //     const res = await axios.get(
  //       `https://starfish-app-uva3q.ondigitalocean.app/budgetize/recent/${userData.user.u_id}`,
  //       // `http://localhost:3001/budgetize/recent/${userData.user.u_id}`,
        
  //       config
  //     );
  //     console.log(res.data.results)
        
  //     setData(res.data.results)
  //     // setLoading(false);
  //     // setData((prevData)=>{
  //     //   console.log(prevData)
  //     //  return [...prevData,...res.data.results] 
  //     // });

  //     // if(res.data.results.length===0){
  //     //   console.log("end!!!!!!!")
  //     //   setHasMore(false);
  //     // }
  //   } catch (err) {
  //     console.error("error ", err.res.data);
  //   }
  // }


  async function getChallenges(){
    console.log("getting challenges");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const res = await axios.get(
        // `http://localhost:3001/budgetize/users/challenges/${userData.user.challenge_id}`,
        `https://starfish-app-uva3q.ondigitalocean.app/budgetize/users/challenges/${userData.user.challenge_id}`,
        config
      );
      console.log(res.data.active);
      console.log(res.data.completed);

     
      setActiveChallenges(res.data.active);
      setCompletedChallenges(res.data.completed);
      // setChallenges(res.data.results);

   
    } catch (err) {
      console.error("error ", err);
    }
  }
  
  useEffect(()=>{
    userData.user.challenge_id.length !==0 && getChallenges()
    // console.log(challenges)
    // getRecent()
   
   
    console.log(activeChallenges);
    console.log(completedChallenges);
    
  },[])

  
  console.log(activeChallenges); 
  console.log(completedChallenges);
  

  function getCurrentChallengeDays(chlng_start_date){
    // chlng_start_date = userData.user.challenge_id.length!==0?userData.challengeData.start_date.slice(4,15):"";
    // console.log(" checking This year this month")
    // console.log(chlng_start_date.slice(4,6))
    // console.log(todayDate.slice(8,10))
    if( chlng_start_date.slice(11,15) === todayDate.slice(11,15) &&  chlng_start_date.slice(4,7) === todayDate.slice(4,7)  ){

      // console.log((   todayDate.slice(8,10) - chlng_start_date.slice(8,10) )+1)
      // console.log("This year this month")
      // }
      // setChallengeDate(( todayDate.slice(4,6) - chlng_start_date.slice(4,6)  ) +1)
      return (( todayDate.slice(8,10) - chlng_start_date.slice(8,10) )+1 );
  }else{
    return "";
  }
  }

  console.log(localStorage.getItem('token'));
  return (
    <div className="dashboard">

    

    <div id="d-board-headWrapper">
      <h1>Budgetize</h1>
      {/* <span className="gauge-dot top"></span> */}

      <div className="d-board-head">
        {/* <Gauge /> */}
        <div style={{display:"flex", justifyContent:"space-around" , alignItems:"center", margin:"30px"}}>
          
        
        <div className="d-board welcome">
          <h4>Welcome Back,</h4>
          <h2 style={{
            margin:"2px 0",
          }}>
          {userData.user.username.charAt().toUpperCase() + userData.user.username.slice(1)}</h2>
          <h2>₹ {userData.user.currentAmount}</h2>
        </div>
        <div >
          <div data-progress={spendPercent} className="d-board expenseBar" style={{ background :`conic-gradient(#5cf520 ${progress}, transparent 0deg)` }} >
          </div>
        </div>
        </div>
        <h3 style={{color:"white", textAlign:"Center"}}>Monthly Limit : ₹ {userData.user.maxLimit}</h3>
      </div>      
    </div>

      <div style={{
          display:"flex",
          justifyContent:"center",
          margin:"20px 0 10px 0"
         }}>
         <div style={{
            backgroundColor:"white",
            width:"90%",
            height:"120px",
            borderRadius:"10px",
            display:"flex",
            justifyContent:"space-between",
            // padding:"10px"
          }}>

          <ChallengeContainer/>


       

      <div style={{
        width:"70%",
        padding:"10px",
        display:"flex",
        // flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}  onClick={()=>{
        navigate(`/challenge/${userData.user.username}`)
      }}>
      
        <h5>Start Your Budgetize Friendly Challenge Today !</h5>
        <div style={{
            width:"38%"
        }}>  
        <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 96 96"
    >
      <path fill="none" d="M0 0h96v96H0z"></path>
      <path
        fill="#f3b725"
        d="M36.785 81.577a3 3 0 01-2.423-4.769c4.798-6.506 7.639-13.026 8.542-19.545.024-.175.047-3.164.068-3.338.999.178 9.057.178 10.056 0 .021.174.044 3.163.068 3.338.903 6.519 3.744 13.039 8.523 19.559a2.975 2.975 0 01-2.404 4.73c-6.335.025-16.095.025-22.43.025z"
      ></path>
      <path
        fill="#f20d0d"
        fillOpacity="0.15"
        d="M48.063 54.059c.837-.001 4.703-.088 4.965-.134.021.174.044 3.163.068 3.338.903 6.519 3.744 13.039 8.523 19.559a2.975 2.975 0 01-2.404 4.73c-6.335.025-9.821.019-4.971 0a2.976 2.976 0 002.403-4.73c-2.538-3.463-4.53-6.927-5.975-10.39a8.31 8.31 0 00-7.211-5.224c-.433-.08-.868-.11-1.303-.145a34.95 34.95 0 00.746-3.8c.024-.175.047-3.164.068-3.338.504.09 2.806.134 5.091.134z"
      ></path>
      <path
        fill="#f3b725"
        d="M31.951 25.152c-1.597-3.791-5.19-6.68-8.775-7.421-2.598-.537-5.189.008-7.156 1.975-3.891 3.892-2.752 9.002.714 14.101 4.527 6.661 12.976 13.349 15.548 16.546a1.5 1.5 0 002.338-1.881c-2.545-3.163-10.926-9.76-15.405-16.351-2.54-3.738-3.926-7.441-1.073-10.294 1.212-1.212 2.825-1.49 4.426-1.159 2.714.561 5.409 2.778 6.619 5.649a1.5 1.5 0 002.764-1.165z"
      ></path>
      <path
        fill="#f39e21"
        d="M66.813 26.317c1.21-2.871 3.905-5.088 6.619-5.649 1.601-.331 3.214-.053 4.426 1.159 2.853 2.853 1.467 6.556-1.073 10.294-4.479 6.591-12.86 13.188-15.405 16.351a1.5 1.5 0 002.338 1.881c2.572-3.197 11.021-9.885 15.548-16.546 3.466-5.099 4.605-10.209.714-14.101-1.967-1.967-4.558-2.512-7.156-1.975-3.585.741-7.178 3.63-8.775 7.421a1.5 1.5 0 002.764 1.165z"
      ></path>
      <path
        fill="#f3b725"
        d="M65.225 17.424a3 3 0 00-3-3.001H33.569a3 3 0 00-3 3.001v22.277a17.307 17.307 0 0017.308 17.307h.04a17.303 17.303 0 0017.308-17.307V17.424z"
      ></path>
      <path
        fill="#f20d0d"
        fillOpacity="0.15"
        d="M30.569 30.216h34.656V17.424a3 3 0 00-3-3.001H33.569a3 3 0 00-3 3.001v12.792z"
      ></path>
      <path
        fill="#f20d0d"
        fillOpacity="0.15"
        d="M57.542 14.423a3.004 3.004 0 013 3.001v22.277a17.307 17.307 0 01-14.986 17.151c.764.104 1.54.156 2.321.156h.04a17.303 17.303 0 0017.308-17.307V17.424a3 3 0 00-3-3.001h-4.683z"
      ></path>
      <path
        fill="#f1c021"
        d="M65.225 17.424a3 3 0 00-3-3.001H33.569a3 3 0 00-3 3.001v8.31h34.656v-8.31z"
      ></path>
      <path
        fill="#f20d0d"
        fillOpacity="0.15"
        d="M57.573 14.423a3 3 0 013 3.001v8.31h4.652v-8.31a3 3 0 00-3-3.001h-4.652z"
      ></path>
      <path
        fill="#f2f986"
        d="M34.594 34.036v8.63a1.5 1.5 0 003 0v-8.63a1.501 1.501 0 00-3 0zm3-19.613h-3v5.788a1.5 1.5 0 003 0v-5.788z"
      ></path>
      <path
        fill="#f39e21"
        d="M5.527 53.811A5.028 5.028 0 00.5 58.837a5.029 5.029 0 005.027 5.027 5.028 5.028 0 005.026-5.027 5.028 5.028 0 00-5.026-5.026zm0 3a2.027 2.027 0 11-.002 4.054 2.027 2.027 0 01.002-4.054zM28.201.5a5.03 5.03 0 00-5.027 5.027 5.03 5.03 0 005.027 5.026 5.028 5.028 0 005.026-5.026A5.028 5.028 0 0028.201.5zm0 3a2.027 2.027 0 010 4.053 2.027 2.027 0 010-4.053z"
      ></path>
      <path
        fill="#f3b725"
        d="M24.166 90.473V94a1.5 1.5 0 003 0v-3.527a1.5 1.5 0 00-3 0zM29.069 60v3.527a1.5 1.5 0 003 0V60a1.5 1.5 0 00-3 0zM2.263 22.278v3.527a1.5 1.5 0 003 0v-3.527a1.5 1.5 0 00-3 0zM55.759 2v3.527a1.5 1.5 0 003 0V2a1.5 1.5 0 00-3 0z"
      ></path>
      <path
        fill="#f3b725"
        d="M23.903 93.737h3.527a1.501 1.501 0 000-3h-3.527a1.5 1.5 0 000 3zm4.903-30.474h3.526a1.5 1.5 0 000-3h-3.526a1.5 1.5 0 000 3zM2 25.542h3.527a1.5 1.5 0 000-3H2a1.5 1.5 0 000 3zM55.496 5.263h3.527a1.501 1.501 0 000-3h-3.527a1.5 1.5 0 000 3z"
      ></path>
      <path
        fill="#f39e21"
        d="M69 83.447a5.03 5.03 0 00-5.027 5.026A5.03 5.03 0 0069 93.5a5.03 5.03 0 005.027-5.027A5.03 5.03 0 0069 83.447zm0 3a2.027 2.027 0 110 4.055 2.027 2.027 0 010-4.055zm14-43.474A5.03 5.03 0 0077.973 48 5.03 5.03 0 0083 53.027 5.03 5.03 0 0088.027 48 5.03 5.03 0 0083 42.973zm0 3a2.028 2.028 0 11-.001 4.055A2.028 2.028 0 0183 45.973zm7.473-28.678a5.03 5.03 0 00-5.026 5.027 5.03 5.03 0 005.026 5.027 5.03 5.03 0 005.027-5.027 5.03 5.03 0 00-5.027-5.027zm0 3a2.028 2.028 0 010 4.054 2.028 2.028 0 010-4.054z"
      ></path>
      <path
        fill="#f3b725"
        d="M90.737 56.156v3.526a1.5 1.5 0 003 0v-3.526a1.5 1.5 0 00-3 0zM73.263 69.473V73a1.5 1.5 0 003 0v-3.527a1.5 1.5 0 00-3 0z"
      ></path>
      <path
        fill="#f3b725"
        d="M90.473 59.419H94a1.5 1.5 0 000-3h-3.527a1.5 1.5 0 000 3zM73 72.737h3.527a1.5 1.5 0 000-3H73a1.5 1.5 0 000 3z"
      ></path>
      <path d="M5.527 53.811A5.028 5.028 0 00.5 58.837a5.029 5.029 0 005.027 5.027 5.028 5.028 0 005.026-5.027 5.028 5.028 0 00-5.026-5.026zm0 3a2.027 2.027 0 11-.002 4.054 2.027 2.027 0 01.002-4.054zM28.201.5a5.03 5.03 0 00-5.027 5.027 5.03 5.03 0 005.027 5.026 5.028 5.028 0 005.026-5.026A5.028 5.028 0 0028.201.5zm0 3a2.027 2.027 0 010 4.053 2.027 2.027 0 010-4.053zm-4.035 86.973V94a1.5 1.5 0 003 0v-3.527a1.5 1.5 0 00-3 0zM29.069 60v3.527a1.5 1.5 0 003 0V60a1.5 1.5 0 00-3 0zM2.263 22.278v3.527a1.5 1.5 0 003 0v-3.527a1.5 1.5 0 00-3 0zM55.759 2v3.527a1.5 1.5 0 003 0V2a1.5 1.5 0 00-3 0z"></path>
      <path d="M23.903 93.737h3.527a1.501 1.501 0 000-3h-3.527a1.5 1.5 0 000 3zm4.903-30.474h3.526a1.5 1.5 0 000-3h-3.526a1.5 1.5 0 000 3zM2 25.542h3.527a1.5 1.5 0 000-3H2a1.5 1.5 0 000 3zM55.496 5.263h3.527a1.501 1.501 0 000-3h-3.527a1.5 1.5 0 000 3zM69 83.447a5.03 5.03 0 00-5.027 5.026A5.03 5.03 0 0069 93.5a5.03 5.03 0 005.027-5.027A5.03 5.03 0 0069 83.447zm0 3a2.027 2.027 0 110 4.055 2.027 2.027 0 010-4.055zm14-43.474A5.03 5.03 0 0077.973 48 5.03 5.03 0 0083 53.027 5.03 5.03 0 0088.027 48 5.03 5.03 0 0083 42.973zm0 3a2.028 2.028 0 11-.001 4.055A2.028 2.028 0 0183 45.973zm7.473-28.678a5.03 5.03 0 00-5.026 5.027 5.03 5.03 0 005.026 5.027 5.03 5.03 0 005.027-5.027 5.03 5.03 0 00-5.027-5.027zm0 3a2.028 2.028 0 010 4.054 2.028 2.028 0 010-4.054zm.264 35.861v3.526a1.5 1.5 0 003 0v-3.526a1.5 1.5 0 00-3 0zM73.263 69.473V73a1.5 1.5 0 003 0v-3.527a1.5 1.5 0 00-3 0z"></path>
      <path d="M90.473 59.419H94a1.5 1.5 0 000-3h-3.527a1.5 1.5 0 000 3zM73 72.737h3.527a1.5 1.5 0 000-3H73a1.5 1.5 0 000 3zM29.069 35.662v4.039a18.804 18.804 0 0018.808 18.807h.04a18.804 18.804 0 0018.808-18.807V17.424a4.5 4.5 0 00-4.5-4.501H33.569a4.5 4.5 0 00-4.5 4.501v13.004a1.501 1.501 0 003 0V17.424a1.5 1.5 0 011.5-1.501h28.656a1.5 1.5 0 011.5 1.5v22.278a15.808 15.808 0 01-15.808 15.807h-.04a15.804 15.804 0 01-15.808-15.807v-4.039a1.5 1.5 0 00-3 0z"></path>
      <path d="M31.951 25.152c-1.14-2.706-3.291-4.96-5.734-6.289-3.461-1.882-7.453-1.901-10.197.843-3.891 3.892-2.752 9.002.714 14.101 4.527 6.661 12.976 13.349 15.548 16.546a1.5 1.5 0 002.338-1.881c-2.545-3.163-10.926-9.76-15.405-16.351-2.54-3.738-3.926-7.441-1.073-10.294 1.783-1.783 4.392-1.552 6.642-.328 1.873 1.019 3.529 2.743 4.403 4.818a1.5 1.5 0 002.764-1.165zm4.549 2.082h28.725a1.5 1.5 0 000-3H36.5a1.5 1.5 0 000 3z"></path>
      <path d="M66.813 26.317c1.21-2.871 3.905-5.088 6.619-5.649 1.601-.331 3.214-.053 4.426 1.159 2.853 2.853 1.467 6.556-1.073 10.294-4.479 6.591-12.86 13.188-15.405 16.351a1.5 1.5 0 002.338 1.881c2.572-3.197 11.021-9.885 15.548-16.546 3.466-5.099 4.605-10.209.714-14.101-1.967-1.967-4.558-2.512-7.156-1.975-3.585.741-7.178 3.63-8.775 7.421a1.5 1.5 0 002.764 1.165zM51.539 56.921c.849 6.926 3.793 13.86 8.868 20.786a1.473 1.473 0 01-1.191 2.345h-.006c-6.334.025-16.092.025-22.426.025a1.502 1.502 0 01-1.212-2.384c3.751-5.088 6.336-10.187 7.777-15.285a1.499 1.499 0 10-2.886-.816c-1.352 4.78-3.791 9.555-7.309 14.325l-.005.006a4.503 4.503 0 00-.377 4.692 4.504 4.504 0 004.012 2.462c6.337 0 16.101-.001 22.438-.025a4.476 4.476 0 003.609-7.114l-.002-.002c-4.737-6.463-7.52-12.918-8.312-19.38a1.5 1.5 0 10-2.978.365z"></path>
    </svg>
   </div>
      </div>
     

          </div>
         </div>

         { 
          activeChallenges.length!==0 &&       


          activeChallenges.map((challenge)=>{
             
              return <div style={{
          display:"flex",
          justifyContent:"center",
          margin:"20px 0 10px 0"
         }}>
         <div style={{
            backgroundColor:"white",
            width:"90%",
            height:"120px",
            borderRadius:"10px",
            display:"flex",
            justifyContent:"space-between",
            // padding:"10px"
          }}>

          <ChallengeContainer/>

            {/* User 1 Profile */}
       
        

        <div style={{
          width:"70%",
          display:"contents"
        }}  onClick={
          ()=>{
            setChallenge(challenge);
            navigate("/challenge")
          }
        }>
            <div className="d-board-chlng"> 
            <div className="profile-img container" style={{
            margin:"10px"
          }}> 
            <img src={
              challenge.user1Pfp}
              // `http://localhost:3001/budgetize/account/profile/${challenge.user1}`} 
              // `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${userData.user.u_id}`} 
              alt="Profile PFP"/>
          </div>
          <p style={{
            fontSize:'18px',
            fontWeight:"700"
          }}>{challenge.user1Name.charAt().toUpperCase()+ challenge.user1Name.slice(1)}</p>
            </div>

        <div style={{
          width:"20%",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"space-evenly"
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path
        fill="#fe9526"
        d="M16.34 64c-.23 0-.46-.05-.67-.17-.62-.33-.91-1.07-.68-1.74l9.62-27.68h-9.54c-.47 0-.9-.23-1.17-.61-.27-.38-.33-.87-.18-1.31L25.05.95c.2-.57.74-.95 1.35-.95h22.54a1.434 1.434 0 011.18 2.25l-14.16 20.4h9.16c.54 0 1.04.31 1.28.79.24.49.19 1.07-.13 1.5L17.49 63.43c-.28.37-.71.57-1.15.57zm.77-32.45h9.52a1.436 1.436 0 011.36 1.9L20.73 54.3l21.53-28.79h-9.04a1.434 1.434 0 01-1.18-2.25L46.2 2.86H27.4L17.11 31.55z"
        className="colorf6b64e svgShape"
      ></path>
    </svg>

    <p style={{
      backgroundColor:"#fa4887",
      color:"white",
      padding:"4px 6px",
      borderRadius:"5px"
    }}>Day {
      getCurrentChallengeDays(challenge.start_date) || 0
    }</p>
        </div>


            {/* User 2 Profile */}
            <div className="d-board-chlng">
            
          <div className="profile-img container" style={{
            margin:"10px"
          }}>
            <img src={
            challenge.user2Pfp}
              // `http://localhost:3001/budgetize/account/profile/${challenge.user2}`}
              // `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${challenge.user2}`}
               alt="Profile PFP"/>
          </div>
          <p style={{
            fontSize:'18px',
            fontWeight:"700"
          }}>{challenge.user2Name.charAt().toUpperCase() + challenge.user2Name.slice(1)}</p>
          
            </div>
            </div>
   
     

          </div>
         </div> 
            })
          
         }

         
         { 
          completedChallenges.length!==0 &&       


         completedChallenges.map((challenge)=>{
             
              return <div style={{
          display:"flex",
          justifyContent:"center",
          flexDirection:"column",
          alignItems:"center",
          margin:"20px 0 10px 0"
         }}>
          <p style={{
            color:"rgb(124 124 124)",
            margin:"10px 0"
          }}>Completed Challenges</p>
         <div style={{
            backgroundColor:"#d1d1d1",
            width:"90%",
            height:"120px",
            borderRadius:"10px",
            display:"flex",
            justifyContent:"space-between",
            // padding:"10px"
          }}>

          <ChallengeContainer/>



            {/* User 1 Profile */}
            <div style={{
          width:"70%",
          display:"flex",
          justifyContent:"space-around",
          position:"relative"
          
        }}  onClick={
          ()=>{
            setChallenge(challenge);
            navigate("/challenge")
          }
        }>

            {/* Completed Challenge Barricades */}
            <div style={{
              width:"100%",
              // height:"40px",
              padding:"7px",
              backgroundColor:"#464646",
              position:"absolute",
              top:"30%",
              left:"0",
              transform:"skewY(-7deg)",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              color:"white"
            }}>
              <p style={{
                fontSize:'18px',
                fontSize:"1.2rem",
              }}>Challenge Completed</p>
            </div>


            <div className="d-board-chlng"> 
            <div className="profile-img container" style={{
            margin:"10px"
          }}> 
            <img src={
              challenge.user1Pfp}
              // `http://localhost:3001/budgetize/account/profile/${challenge.user1}`} 
              // `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${userData.user.u_id}`} 
              alt="Profile PFP"/>
          </div>
          <p style={{
            fontSize:'18px',
            fontWeight:"700"
          }}>{challenge.user1Name.charAt().toUpperCase()+ challenge.user1Name.slice(1)}</p>
            </div>

        <div style={{
          width:"30%",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"space-evenly"
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path
        fill="#fe9526"
        d="M16.34 64c-.23 0-.46-.05-.67-.17-.62-.33-.91-1.07-.68-1.74l9.62-27.68h-9.54c-.47 0-.9-.23-1.17-.61-.27-.38-.33-.87-.18-1.31L25.05.95c.2-.57.74-.95 1.35-.95h22.54a1.434 1.434 0 011.18 2.25l-14.16 20.4h9.16c.54 0 1.04.31 1.28.79.24.49.19 1.07-.13 1.5L17.49 63.43c-.28.37-.71.57-1.15.57zm.77-32.45h9.52a1.436 1.436 0 011.36 1.9L20.73 54.3l21.53-28.79h-9.04a1.434 1.434 0 01-1.18-2.25L46.2 2.86H27.4L17.11 31.55z"
        className="colorf6b64e svgShape"
      ></path>
    </svg>

    <p style={{
      backgroundColor:"#fa4887",
      color:"white",
      padding:"4px 6px",
      borderRadius:"5px"
    }}>Day 30</p>
        </div>


            {/* User 2 Profile */}
            <div className="d-board-chlng">
            
          <div className="profile-img container" style={{
            margin:"10px"
          }}>
            <img src={
            challenge.user2Pfp}
              // `http://localhost:3001/budgetize/account/profile/${challenge.user2}`}
              // `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${challenge.user2}`}
               alt="Profile PFP"/>
          </div>
          <p style={{
            fontSize:'18px',
            fontWeight:"700"
          }}>{challenge.user2Name.charAt().toUpperCase() + challenge.user2Name.slice(1)}</p>
          
            </div>
            </div>
   
      
          </div>
          </div>
          }

         )}
{/* 
      {data.map((singleData, index) => {
        return <ShortCard date={singleData.ledgerDate} money={singleData.totalPerday} />;
      })} */}

      <div className="bottomButton">
      <Link to="/create">
        <Button variant="outlined" size="small">
          See All Activities
        </Button>
        </Link>
      </div>


      <BottomBar />
      </div>
  );
}

export default DashboardScreen;
