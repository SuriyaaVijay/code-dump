import React, { useState,useContext } from 'react';
import logo from '/vite.svg';
import { setQuery } from '../states/searchSlice';

import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [query,setquery]=useState('');
   const dispatch = useDispatch()
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setQuery(query));
      console.log('query :',query)
     
      console.log("Clicked on Search")
      
    };
  const handleChange = (e) => {
    setquery(e.target.value);
  }
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search-box">
        <div className="search-box-elements">
          <i onClick={handleSubmit} className="fa-solid fa-magnifying-glass"></i>
          <input onChange={handleChange} type="text" placeholder="Search high-resolution images" />
        </div>
      </div>
      <div className="nav-links-usual">
        <a href="#">Advertise</a>
        <a href="#">Unsplash+</a>
        <a href="#">Blog</a>
        <a href="#">Advertise</a>
        <a href="#">Unsplash+</a>
        <a href="#">Blog</a>
      </div>

      <div className="submit-photo">
        <button>Submit Photo</button>
      </div>

      <div className="bell-icon">
        <a href="#">
          <i className="fa-solid fa-bell"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
