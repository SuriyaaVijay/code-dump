import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDetails } from "../index";
import "./securePage.css";

const SecurePage = ({ handleState, userLogin, loginUserName }) => {
   const navigate = useNavigate();
   const logOutsession = () => {
      handleState(false)
      navigate('/authpage')
   }

   useEffect(() => {
      if (userLogin === false) {
         navigate('/authpage')
      }
   })


   return (
      <div className='container'>
         <nav>
            <div className="heading">
               <h3>
                  <Link to='/'>AuthApp</Link>
               </h3>
            </div>
            <div className="logout">
               <button onClick={logOutsession} type='button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ed6a5aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out">
                     <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                     <polyline points="16 17 21 12 16 7" />
                     <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
               </button>
            </div>
         </nav>

         <header>
            {userLogin === true && <UserDetails loginUserName={loginUserName} />}
         </header>
      </div>
   )
}

export default SecurePage
