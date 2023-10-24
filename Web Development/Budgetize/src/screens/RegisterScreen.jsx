import React,{useState,useContext,useEffect} from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import Fab from "@mui/material/Fab";
import { AuthData } from "../context/AuthContext.jsx";
import "../styles/registerScreen.css"
function RegisterScreen(){

    const { value1, value2 ,value3} = useContext(AuthData);
    const [userData,setUserData]= value3;

    const [userCred,setUserCreds] = useState({
        profilePhoto:"",

    });
    const navigate = useNavigate();
    async function handleRegister(e){
        e.preventDefault();
        // const body = JSON.stringify(userCred);;
        // console.log(body)
        // console.log(userCred)

        const formData = new FormData();
        formData.append('profilePhoto',userCred.profilePhoto);
        formData.append('email',userCred.email);
        formData.append('username',userCred.username);
        formData.append('maxLimit',userCred.maxLimit);
        formData.append('password',userCred.password);
    
      console.log(formData)
        
        try{
            await axios.post(
                // `http://localhost:3001/budgetize/users/register`,
                `https://starfish-app-uva3q.ondigitalocean.app/budgetize/users/register`,
               
                formData
            ).then((res)=>{
                console.log(res.data)
                setUserData({...res.data});
                navigate("/")
            })
        }
        catch(error){
            console.log(error,"Error Occured")
        }
    }

  function handleImageInput(e){
    const file = e.target.files[0];
    console.log(file);
    setUserCreds((prevNotes) => {
        return { ...prevNotes, profilePhoto: file };
      });
  }

  function handleChange(e){
    const {name,value} = e.target;
    setUserCreds((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  }
  console.log(userCred)

    return <>
        <div className="register">

        <h3>Create Your Account!</h3>

        <label for="profilePhoto">

        <div class="profile-img container" style={{
            margin:"20px 0"
        }}>
            {/* <img src="images/minato_profile.jpg" /> */}
            <AccountCircleIcon style={{
                color:"#5cf520",
                width:"80px",
                height:"80px",
                backgroundColor:"#ebffff"
            }}/>
            <div class="secondary">

            <AddCircleOutlineSharpIcon style={{
            color:"gainsboro",
        
            }}/>
            </div>
          </div>
           <input type="file" id="profilePhoto" accept="image/*" style={{display:"none"}} onChange={handleImageInput}/>
        </label>

         <div style={{
            display:"flex",
            flexDirection:"column"
         }}>
         <label>Email:</label>
          <input name="email" type="mail" onChange={handleChange} placeholder="Eg: Minato@mail"/>
         <label>Username:</label>
          <input name="username"  onChange={handleChange} placeholder="Eg: Minato"/>
         <label>Maximum Limit Per Month:</label>
          <input name="maxLimit"  onChange={handleChange} placeholder="Eg: 5000"/>
         <label>Password:</label>
          <input name="password"  onChange={handleChange} type="password"/>
         <label>Re-enter Password:</label>
          <input name="confirmPassword"  onChange={handleChange} type="password"/>
         </div>

         <Fab onClick={handleRegister}>Register</Fab>
        </div>
    </>
}

export default RegisterScreen;