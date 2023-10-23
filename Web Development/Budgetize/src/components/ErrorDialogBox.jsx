import React from "react";
import Fab from "@mui/material/Fab";
import { useParams , useNavigate} from "react-router-dom";
import Slide from '@mui/material/Slide';

function ErrorDialogBox(){

    const navigate = useNavigate();
    return <>
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div style={{
                width:"85%",
                height:"250px",
                backgroundColor:"white",
                borderRadius:"16px",
                padding:"30px",
                position:"absolute",
                top:"40%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                alignItems:"center" 
            }}>
                <h3 style={{
                    textAlign:"center",
                }}>Sorry , you have reached your challenge limits. Please wait until next month! </h3>

                <Fab 
                style={{
                    height:"50px",
                    width:"150px",
                    backgroundColor:"red",
                    color:"white",
                    borderRadius:"10px",
                    textTransform:"capitalize",
                    fontSize:"1.2rem",

                }} 
                onClick={()=>{
                    navigate('/')
                }}
                >
                    Cancel
                </Fab>
            </div>

        </div>
</Slide>
    </>
}

export default ErrorDialogBox;