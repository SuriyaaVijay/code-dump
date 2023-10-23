import React,{useState,useContext} from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import Fab from "@mui/material/Fab";
import { AuthData } from "../context/AuthContext.jsx";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {

  const oAuthBtnStyles = {
    width:"300px",
    height:"52px",
    borderRadius:"12px",
    backgroundColor:"white",
    color:"black",
    textTransform:"capitalize",
    boxShadow:"none"
  }
  const [loginCreds,setLoginCreds] = useState({
    username:"",
    password:""
  });
  const [loginState,setLoginState] = useState({
    loading:false,
    loaded:false,
    unAuthorized:false,
    unKnownError:false,
    credsError:false,
  })
  const { value1, value2 ,value3 , value4} = useContext(AuthData);
  const [userData,setUserData] = value3;
  const [selectedChallenge,setChallenge] = value4;
  const navigate = useNavigate();
  const {u_id1,u_id2} = useParams();
  
  


  function handleChange(e){
    const {name,value} = e.target;
    setLoginCreds((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  }

  console.log(loginCreds)


  async function handleLogin(e){
    setLoginState({loading:true})
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      // console.log(loginAccount);
      const body = JSON.stringify(loginCreds);
      // console.log(body);
      await axios
        .post(
          "https://starfish-app-uva3q.ondigitalocean.app/budgetize/users/login",
          // `http://localhost:3001/budgetize/users/login`,
          body,config)
        .then((res) => {
          // setLoggedIn(true);
          // setCurrentUser(res.data.user);
          // setAuthState(res.data.token);
          console.log(res.data)
       
          setLoginState({loaded:true})
          // if(res.data.user.challenger!=="none"){
          //     setChallenger(...res.data.challenger)
          // }
          setUserData(res.data);
          localStorage.setItem('token', res.data.token);
          console.log(localStorage.getItem('token'));
          if(u_id1){
            // console.log("yeah..",u_id2)
            navigate(`${res.data.user.username}`);
            
          }else{
            navigate("/")
          }
          // console.log(res.data.token)
          
        }).catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            if(error.response.status===401){
              setLoginState({unAuthorized:true})
            }
            else if (error.response.status===400){
              setLoginState({credsError:true})
            }
            else{
              setLoginState({unKnownError:true})

            }
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            
          }
      
        });
    } catch (err) {
      console.error("error ", err.res.data);
     
    }
  
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection:"column",
          justifyContent:"center",
          height:"98vh"
        }}
      >
        <div
          style={{
            background: "#5cf520",
            width: "300px",
            height: "300px",
            borderRadius: "16px",
            padding:"0 20px"
          }} className="login"
        >
            <h3 style={{
                textAlign:"center",
                fontSize:"1.5rem",
                margin:"20px",
                
            }}>Login</h3>

            <input name="username" placeholder="Username" onChange={handleChange}/>
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />

            <div style={{
                display:"flex",
                justifyContent:"center",
                margin:"20px 0"
            }}>

            <Fab style={{
                backgroundColor:"white",
                height:"30px",
                width:"100px",
                borderRadius:"10px",
                fontSize:"17px",
                fontWeight:"600",
                textAlign:"center",
                textTransform:"capitalize"
            }} onClick={handleLogin}>
            {
             
              loginState.loading ? <CircularProgress style={{
                color:"#5cf520",
                height:"20px",
                width:"20px"
                }} /> : loginState.loaded ? "Hello" : "Login" }
        </Fab>

            </div>
        <div style={{
          display:"flex",
          justifyContent:"space-evenly",
          color:"white"
        }}>
          <p>New User ?</p>
          <Link style={{
            color:"#7a7a7a",
            textDecoration:"none"
          }}   to={"/register"}>Register !</Link>
        </div>

        </div>

        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"space-evenly",
          // height:"250px",
          marginTop:"10px"
        }}>


        {loginState.unAuthorized && <p style={{
          color:"red",
          marginBottom:"20px"
        }}>Invalid Credentials</p>}

        {loginState.credsError && <p style={{
          color:"red",
          marginBottom:"20px",
          textAlign:"center"
        }}>Kindly enter all Credentials!</p>}

        {loginState.unKnownError && <p style={{
          color:"red",
          marginBottom:"20px",
          textAlign:"center"
        }}>There was an Unexpected Error <br></br> Kindly Try Again!</p>}


        {/* <p>OR</p>
          <Fab style={oAuthBtnStyles}>
           Login Using Snapchat      <SocialIcon network="snapchat" style={{ height: 25, width: 25 , color:"white" ,margin:"8px"}} key="25" />
          </Fab>
          <Fab style={oAuthBtnStyles}>
           Login Using Google      <SocialIcon network="google" style={{ height: 25, width: 25 , color:"white" ,margin:"8px"}} key="25" />
          </Fab>
          <Fab style={oAuthBtnStyles}>
           Login Using Facebook      <SocialIcon network="facebook" style={{ height: 25, width: 25 , color:"white" ,margin:"8px"}} key="25" />
          </Fab> */}
        </div>
      </div>
    </>
  );
}

export default Login;
