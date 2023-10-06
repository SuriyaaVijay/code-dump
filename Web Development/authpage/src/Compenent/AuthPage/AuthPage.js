import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import hashPassword from '../../Actions/HashPassword';
import './authPage.css';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ handleState }) => {

   const navigate = useNavigate();
   const [login, setLogin] = useState("login")
   const [credential, setCredential] = useState({ name: '', username: '', password: '', cpassword: '' });
   const [logcredential, setLogCredential] = useState({ username: "", password: '' })

   const storeCredentials = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
   }

   const createUser = async (e) => {
      e.preventDefault();
      let isUsernameAvailable = true;
      for (let i = 0; i < localStorage.length; i++) {
         const storedUsername = localStorage.key(i);
         if (storedUsername === credential.username) {
            isUsernameAvailable = false;
            break;
         }
      }
      document.getElementById('newUserNameError').textContent = "";
      document.getElementById('newPasswordError').textContent = "";

      // Checking another User is exist or not with same username
      if (isUsernameAvailable) {
         // Checking the password are same or not
         if (credential.password === credential.cpassword) {
            const userPassword = credential.password;
            const hashedPassword = await hashPassword(userPassword);
            //Store Data of New User in LocalStorage
            storeCredentials(credential.username, {
               name: credential.name,
               password: hashedPassword
            })
            handleState(true, credential.username);
            navigate('/')
         } else { document.getElementById('newPasswordError').textContent = "Password is not same"; }
      }
      else { document.getElementById('newUserNameError').textContent = "UserName already exits"; }
   }

   const formSubmit = async (e) => {
      e.preventDefault();
      document.getElementById('usernameError').textContent = "";
      document.getElementById('passwordError').textContent = "";

      const user = JSON.parse(localStorage.getItem(logcredential.username));
      if (user === null) {
         document.getElementById('usernameError').textContent = "UserName is not exist"
      }
      else {
         const enteredPassword = logcredential.password;
         const storedHashedPassword = user.password;
         const isPasswordCorrect = await bcrypt.compare(enteredPassword, storedHashedPassword);
         if (isPasswordCorrect) {
            handleState(true, logcredential.username);
            navigate('/')
         } else {
            document.getElementById('passwordError').textContent = "Password is not correct";
         }
      }

   };

   const handleChange = (e) => {
      setCredential({ ...credential, [e.target.name]: e.target.value });
   };
   const loghandleChange = (e) => {
      setLogCredential({ ...logcredential, [e.target.name]: e.target.value });
   };

   return (
      <div className='authpage'>
         <div className="content">
            {login === "login" ?
               <div className="login">
                  <div className="heading">
                     <h1>Welcome Back</h1>
                  </div>
                  <form onSubmit={formSubmit}>
                     <div className="inputs">
                        <input
                           type="text" id="username" name="username" placeholder="Username or gmail"
                           value={logcredential.username} onChange={loghandleChange} required
                        />
                        <p id='usernameError'></p>
                     </div>
                     <div className="inputs">
                        <input
                           type="password" id="password" name="password" placeholder="Password"
                           value={logcredential.password} onChange={loghandleChange} required
                        />
                        <p id='passwordError'></p>
                     </div>
                     <div className="btn">
                        <button type="submit">Submit</button>
                     </div>
                  </form>
                  <div className='linkpage'>
                     <button type='button' onClick={() => setLogin("signup")}>Resgister?</button>
                  </div>
               </div>
               :
               <div className="signup">
                  <div className="heading">
                     <h1>SignUp</h1>
                  </div>
                  <form onSubmit={createUser} >
                     <div className="inputs">
                        <input type="text" id="name" name="name" placeholder="Name"
                           value={credential.name} onChange={handleChange} required
                        />
                     </div>
                     <div className="inputs">
                        <input type="text" id="username" name="username" placeholder="Username"
                           value={credential.username} onChange={handleChange} required
                        />
                        <p id='newUserNameError'></p>
                     </div>
                     <div className="inputs">
                        <input type="password" id="password" name="password" placeholder="Password"
                           value={credential.password} onChange={handleChange} required
                        />
                     </div>
                     <div className="inputs">
                        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password"
                           value={credential.cpassword} onChange={handleChange} required
                        />
                        <p id='newPasswordError'></p>
                     </div>
                     <div className="btn">
                        <button type="submit">Submit</button>
                     </div>
                  </form>
                  <div className='linkpage'>
                     <button type='button' onClick={() => setLogin("login")}>Have an account?</button>
                  </div>
               </div>
            }
         </div>
      </div>
   );
};

export default AuthPage;
