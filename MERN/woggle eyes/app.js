// adding the event listner to respond to the mouse move 
document.addEventListener('mousemove' , (e=>{
const anchor=document.getElementById("anchor");
const rect =anchor.getBoundingClientRect();
// setting up the staring position 
// console.log(rect)
let x= rect.left+rect.width /2;
let y= rect.top+rect.height /2;
// by this we get the co ordinatin
const mouseX=e.clientX;
const mouseY=e.clientY;
const a= angle(mouseX,mouseY,x,y);
const eye = document.querySelectorAll(".eye");
eye.forEach(element => {
    element.style.transform=`rotate(${90+a}deg)`
});


}))
// the parameter passed are x and y which are the 
function angle(x,y,ex,ey){
    const dy =ey-y;
    const dx =ex-x;
    // to ge the angle between them will be 
    const angle = Math.atan2(dy,dx);
    const inpi=angle*180/Math.PI;
    return inpi;
}