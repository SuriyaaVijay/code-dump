import React,{useState} from "react";

import {Link} from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

import "../styles/bottomBar.css";

function BottomBar() {

  const [active, setActive] = useState(null);
  const [home, setHome] = useState(true);

  const [dataTabs, setDataTabs] = useState([
    {
      id: 1,
      tabIcon: <HomeIcon className="linkIcon" /> ,
      tabClass: "myCustomClass",
      tabClicked: home,
      to:"/"
    },
    {
      id: 2,
      tabIcon: <AddIcon className="linkIcon" />,
      tabClass: "myCustomClass",
      tabClicked: false,
      to:"/create"
    }, {
      id: 3,
      tabIcon: <PersonIcon className="linkIcon" />,
      tabClass: "myCustomClass",
      tabClicked: false,
      to:"/profile"
    }, {
      id: 4,
      tabIcon: <SettingsIcon className="linkIcon" />,
      tabClass: "myCustomClass",
      tabClicked: false,
      to:"/settings"
    }
  ]);

  const NavLink = ({ id, tabIcon, isActive,to, tabClicked ,onClick }) => {
    return (
       <li  className= {`item ${isActive ? "active" : "" } `} >
        <Link className="link" 
        to={to}
        onClick={() => navigate(id)} >
        {tabIcon}
         </Link>
      </li>
   
     
    );
  };

  const navigate = (id) => {
    setActive(id);
    setHome(false);
  };

  return (
    <>
      <div class="bottomBar-container">
        <nav class="navigation-bar">
          <ul class="list-items">
          {dataTabs.map((item) => (
      
      <NavLink {...item} isActive={active === item.id} onClick={navigate} />
    
  ))}
            {/* <li class="item">
              <Link class="link" to="/">
                <HomeIcon className="linkIcon" />
              </Link>
            </li>
            <li class="item">
              <Link class="link" to="/create">
                <AddIcon className="linkIcon" />
              </Link>
            </li>
            <li class="item">
              <Link class="link" to="#">
                <PersonIcon className="linkIcon" />
              </Link>
            </li>
             <li class="item">
            <Link class="link" href="#">
                <HomeIcon className="linkIcon" />
                </Link>
            </li> 
            <li class="item">
              <Link class="link" to="#">
                <SettingsIcon className="linkIcon" />
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default BottomBar;
