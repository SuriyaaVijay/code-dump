import React,{useState} from "react";

import { useSwipeable } from "react-swipeable";

import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/shortCard.css";

function ShortCard(props) {

  const [swipeLength,setSwipeLength]= useState();

  const [openedData,setOpenedData]= useState({});
 
  var swipedRight = false;
  // console.log(props)
  const handlers = useSwipeable({
    // onSwipedRight: (eventData)
    // onSwipedRight : (userSwipedRight)=>{
    //   console.log(userSwipedRight)
    // }
    
    onSwiping   : (eventData) =>{
      //  console.log(swipedRight);
      //  console.log("User Swiped!", eventData)

      //  setSwipeLength(eventData.absY);
      if(eventData.dir==="Right" && eventData.absY<8){
        setSwipeLength(Math.round(eventData.absY+(20)));
      }else if(eventData.dir==="Right"){
        setSwipeLength(130);
      }
      //  setSwipeLength(Math.round(eventData.absY*(15)));
       setInterval(()=>{
        setSwipeLength(0);
       },1500)
    },
    swipeDuration:500
    // preventScrollOnSwipe: true,
    // trackMouse: true
    // ,
    // swipeDuration : (eventData)=>{
    //   console.log(eventData)
    // }
    // ...config,
  });

  // async function openLedger(id){
    
  // }

  function openLedger(expenses){

    setOpenedData(expenses)

  }


  return (
    <>
      <div id="cardSection" {...handlers}>
       
           <Fab onClick={()=>{
            console.log("Delete Button Clicked")
            setSwipeLength(0);
           }} class="deleteBtn"><DeleteIcon/></Fab>
            
           <Fab id="cardWrapper"  style={{
              marginLeft:`${swipeLength}px`
            }} onClick={
              ()=>{
           
                props.openLedger(props.id)
                openLedger(props.expenses)
              }
            }>
            {/* <div > */}
              <h4>{props.date}</h4>
              <h4>₹ {props.money}</h4>
            {/* </div> */}
           </Fab>
          
        
          
      </div>
    </>
  );
}

export default ShortCard;
