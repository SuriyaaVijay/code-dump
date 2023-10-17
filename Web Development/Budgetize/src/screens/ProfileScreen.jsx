import React, { useState ,useContext,useEffect } from "react";

import Fab from "@mui/material/Fab";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import { AuthData } from "../context/AuthContext.jsx";

import BottomBar from "../components/BottomBar";
import EditProfileScreen from "./EditProfileScreen";
import "../styles/profileScreen.css";

function ProfileScreen() {
  const [isEdit, setEdit] = useState(false);
  const editState = { isEdit, setEdit };
  const navigate = useNavigate();

  const { value1, value2 ,value3} = useContext(AuthData);

  const [userData,setUserData] = value3;

  var token = localStorage.getItem('token');

  // useEffect(()=>{
  //   if(userData===undefined){
  //     navigate("/login")
  //   }
  // },[])
  return (
    <>
      <div class="profile">
        <div className="profile-Header">
          <h3>My Profile</h3>
        </div>
        <div class="profile-img-name">
          <div class="profile-img container">
            <img src={
              userData.user.profileUrl} 
              // `https://starfish-app-uva3q.ondigitalocean.app/budgetize/account/profile/${authToken.user.u_id}`} 
              alt="Profile PFP"/>
          </div>
          <div>
            <h2>{userData.user.username.charAt().toUpperCase() + userData.user.username.slice(1)}</h2>
            {/* <p>@yellow_flash</p> */}
          </div>
          <Link
            onClick={() => {
              setEdit(true);
            }}
          >
            <Fab>
              <BorderColorOutlinedIcon />
            </Fab>
          </Link>
        </div>
        <div class="profile-d-board">
          <ul>
            <h5>Check Points</h5>
            <li>
              <Link to="/future">
                <div class="icon-container">
                  <SpeedRoundedIcon />
                </div>

                <h4>Spendometer</h4>
              </Link>
            </li>
            <li>
              <Link to="/future">
                <div
                  class="icon-container"
                  style={{ backgroundColor: "#eba61a" }}
                >
                  <CalendarMonthRoundedIcon />
                </div>
                <h4>Monthly Anlaytics</h4>
              </Link>
            </li>
            <li>
              <Link to="/future">
                <div
                  class="icon-container"
                  style={{ backgroundColor: "#e95883" }}
                >
                  <EqualizerRoundedIcon />
                </div>
                <h4>Yearly Anlaytics</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div class="profile-account">
          <h5>Account!</h5>
          
            <h3 onClick={()=>{
              // setUserData()
              navigate("/login");
              localStorage.removeItem('token');
            }}>Logout</h3>
          
        </div>
      </div>
      {isEdit && <EditProfileScreen edit={editState} name={userData.user.username} token={token} uid={userData.user.u_id}/>}

      <BottomBar />
    </>
  );
}

export default ProfileScreen;
