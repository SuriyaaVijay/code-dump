import React from 'react'

const UserDetails = ({ loginUserName }) => {

   let user = JSON.parse(localStorage.getItem(loginUserName))

   return (
      <div className="details">
         <div className="detailsbox">
            <span>UserName</span>
            <span>{loginUserName}</span>
         </div>
         <div className="detailsbox">
            <span>Name</span>
            <span>{user.name}</span>
         </div>
         <div className="detailsbox">
            <span>Position</span>
            <span>Frontend Developer</span>
         </div>
         <div className="detailsbox">
            <span>Experience</span>
            <span>Practice for 1.5 years</span>
         </div>
         <div className="detailsbox">
            <span>Present</span>
            <span>Doing First Internship at Oasis Infobyte</span>
         </div>
         <div className="detailsbox">
            <span>Tool</span>
            <span>HTML5, CSS, JS, ReactJs, Bootstrap, Redux Toolkit , NodeJs</span>
         </div>
      </div>
   )
}

export default UserDetails
