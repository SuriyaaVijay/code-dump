import React, { useState } from "react";
import { createContext ,useContext } from "react";


import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./DashboardScreen";
import CreateArea from "./CreateArea";
import CreateScreen from "./CreateScreen";
import ReplyAmount from "./ReplyAmount";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import RegisterScreen from "./RegisterScreen";
import FutureUpdate from "./FutureUpdate";
import ChallengeScreen from "./ChallengeScreen";
import ChlngShare from "./ChlngShare";
import ChlngAcpt from "./ChlngAcpt";

import ProtectedRoute from "./ProtectedRoute";

import BottomBar from "../components/BottomBar";

import AuthContext,{AuthData} from "../context/AuthContext.jsx";

function App() {


  const { value1, value2 ,value3} = useContext(AuthData);
  const  [userData,setUserData] = value3;
  // const [date, setDate] = value1;
  // const value = {swiped,setSwipe}


  //  setTimeout(()=>{
  //       setSwipe(false);
  //     },7000)
      
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          {/* <Route path="/"> */}
          
          
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            
            
            

          
            <Route path="/create" element={<ProtectedRoute><CreateArea /></ProtectedRoute>} />
            
            <Route path="/profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsScreen /></ProtectedRoute>} />
            <Route path="/createfield" element={<ProtectedRoute><CreateScreen /></ProtectedRoute>} />
            <Route path="/challenge" element={<ProtectedRoute><ChallengeScreen /></ProtectedRoute>} />
            {/* <Route path="/totalAmount" element={<ReplyAmount />} /> */}


            {/* <Route path="/challenge/:u_id1/to/" 
            // render={(props)=> <ChallengeScreen globalStore={globalStore} {...props} /> } 
            element={<ProtectedRoute><ChlngAcpt /></ProtectedRoute>}
             /> */}

            <Route path="/future" element={<FutureUpdate />} />
           
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterScreen />} />


            <Route path="/challenge/:u_id1" 
            // render={(props)=> <ChallengeScreen globalStore={globalStore} {...props} /> } 
            element={<ChlngShare />}
             />
            <Route path="/challenge/:u_id1/to/" 
            // render={(props)=> <ChallengeScreen globalStore={globalStore} {...props} /> } 
            element={<Login />}
             />
            <Route path="/challenge/:u_id1/to/:u_id2" 
            // render={(props)=> <ChallengeScreen globalStore={globalStore} {...props} /> } 
            element={<ChlngAcpt />}
             />
            {/* <Route path="/challenge/:u_id1/to/:u_id2" 
            // render={(props)=> <ChallengeScreen globalStore={globalStore} {...props} /> } 
            element={<Login />}
             /> */}


          




            {/* <Route path="/" element={< />} /> */}
           
          {/* </Route> */}
        </Routes>
        {/* { swiped && <BottomBar />} */}
      </BrowserRouter>
       

    </>
  );
}

export default App;
