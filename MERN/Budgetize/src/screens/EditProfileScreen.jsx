import React,{useState} from "react";

import Fab from "@mui/material/Fab";

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Slide from '@mui/material/Slide';
import axios from "axios";


function EditProfileScreen(props) {

  const [newName,setNewName] = useState("");


  // console.log(props)
  // setNewName(props.name)

  // function handleSubmit(){
  //   console.log(newName);
  
  // }

  // console.log(props.token)

// Api Calling - Post Request to server side with newName. ( Change Username )
async function handleSubmit(){
  // console.log(data)
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + props.token,
    },
  };
  try {
    // const body = JSON.stringify(data);

    await axios
      .post(
        // `http://localhost:3001/budgetize/users/changeName/${props.uid}/${props.name}/${newName}`,
        `https://starfish-app-uva3q.ondigitalocean.app/budgetize/users/changeName/${props.uid}/${props.name}/${newName}`,
        config
      )
      .then((res) => {
        console.log(res)
        console.log(res.data.result);
      
      });
}catch (err) {
  console.log("error ", err.res.data);
    
}
}






  return (
    <>
    <div id="editProfileWrapper">
    <Slide direction="up" in={props.edit.isEdit} mountOnEnter unmountOnExit>
          
        
          
      <div className="editProfile">
      <div style={{display:"flex",justifyContent:"end"}}>
      <Fab>
      <ClearRoundedIcon style={{fontSize:"1.7rem"}} onClick = {()=>{
        props.edit.setEdit(false)
      }}/></Fab>
      </div>
      <div class="editProfile-content">
        <div class="profile-img container">
          <img src="images/minato_profile.jpg" />
        </div>
        <input value={newName ? newName : props.name} onChange={(e)=>{
        
          setNewName(e.target.value);
        }} />
       

        {false && <p>Please Enter a different username !</p>}
        <Fab onClick={handleSubmit}>
            Save Changes
        </Fab>
        </div>
      </div>
      </Slide>

      </div>
    </>
  );
}

export default EditProfileScreen;
