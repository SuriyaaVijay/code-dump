
import React,{useContext} from "react";
import { AuthData } from "../context/AuthContext.jsx";

function ReplyAmount(){

  const { value1, value2 } = useContext(AuthData);
  const [totalPerDay,setTotal] = value2;
  const [date,setDate] = value1;

  console.log(date)
  console.log(totalPerDay)

    return <>
    <div style={{
        width: "100vw",
          height: "100%",
          position: "absolute",
          top: "0%",
          backgroundColor: "#5cf520",
          zIndex: 10000,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          overflow:"hidden"
    }}>
      <div style={{
        background:"white",
        height:"250px",
        width:"250px",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"column",
        padding:"30px"
      }}>
      <h1 style={{
        fontSize:"2.5rem"
      }}>₹ {totalPerDay}</h1>
      <p style={{
        textAlign:"center",
        fontSize:"1.1rem",
        fontWeight:"600"
        // wordBreak:"break-word"
      }}>You've Spent Rs. {totalPerDay} on {date}</p>
      </div>

    </div>

    </>
}

export default ReplyAmount;