import React,{useContext,useEffect} from "react";

import {Link,useNavigate} from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import BottomBar from "../components/BottomBar";
import Header from "../components/Header.jsx"

import { AuthData } from "../context/AuthContext.jsx";
import "../styles/settingsScreen.css"
function SettingsScreen(){
    const navigate = useNavigate();
    const { value1, value2 ,value3} = useContext(AuthData);

    const  [userData,setUserData]= value3;
    // useEffect(()=>{
    //     if(userData===undefined){
    //       navigate("/login")
    //     }
    //   },[])


    return <>
        <Header />
        <div class="settings">
            <h2>Settings</h2>
            <div class="settings-list">
           
            <Link>
                    <h5>Change Monthly Limit</h5>
                    <ChevronRightRoundedIcon />
                </Link>
               
                <Link>
                    <h5>Change Password</h5>
                    <ChevronRightRoundedIcon />
                </Link>

                <Link to={`/challenge/${userData.user.username}`}
                >
                    <h5>Add Friendly Challenge</h5>
                    <ChevronRightRoundedIcon />
                </Link>
               
            </div>

            <BottomBar />
        </div>

    </>
}

export default SettingsScreen;