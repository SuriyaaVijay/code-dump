import React from 'react'

import cover from '/desert.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="cover-page">
            <img src={cover} alt="" />

            <div className="hero-content">
         <h1>Unsplash</h1>
                                 
            <span>The Internet's source for visuals.
                <br />
                Powered by creatos everywhere.
            </span>
            
            <div style={{paddingLeft:'0px'}} id='cover-search' className="search-box">
            <div className="search-box-elements">
            <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search high-resolution images' />
            </div>
         </div>

         
        </div>
      
        </div>
        
    </div>
  )
}

export default Hero
