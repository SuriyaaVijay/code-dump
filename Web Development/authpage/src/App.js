import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage, SecurePage } from "./Compenent/index";
import './App.css';

function App() {

  const [userLogin, setUserLogin] = useState(false)
  const [loginUserName, setLoginUserName] = useState("")

  const handleState = (state, userName) => {
    setUserLogin(state);
    setLoginUserName(userName)
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={
            <SecurePage handleState={handleState} userLogin={userLogin} loginUserName={loginUserName} />
          } />
          <Route exact path='/authpage' element={<AuthPage handleState={handleState} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
