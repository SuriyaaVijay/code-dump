import React from 'react';
import Slider from 'react-slick';
import Carousel from 'nuka-carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//In the JSX code you provided, you are using comments inside the children section of the <Carousel> component.
// According to JSX syntax, comments inside JSX need to be placed inside curly braces {/* */} to indicate that they are 
//JavaScript expressions. Here's the corrected version of your code:

const Carouselia = () => {
  // const settings = {
  //   // ...settings configuration
  // };

  return (
    <div>
      {/*
        <Slider {...settings}>
          <img src={"https://icms-image.slatic.net/images/ims-web/1a4c0320-2b2b-4f6b-8464-a239af93258f.jpg"} style={{width:"100vw", height:"50vw"}} />
          <img src={"https://icms-image.slatic.net/images/ims-web/9e1304be-26e8-4b41-ba7d-8004825082dc.jpg"} style={{width:"100vw", height:"50vw"}} />
          <img src={"https://icms-image.slatic.net/images/ims-web/d4244292-1c85-4eb5-9c10-f4699421a300.jpg"} style={{width:"100vw", height:"50vw"}} />
        </Slider>
      */}

      <Carousel autoplay>
        {/* alt is required here */}
        <img src="https://icms-image.slatic.net/images/ims-web/1a4c0320-2b2b-4f6b-8464-a239af93258f.jpg" alt="home-page" />
        <img src="https://icms-image.slatic.net/images/ims-web/9e1304be-26e8-4b41-ba7d-8004825082dc.jpg" alt="advertisements." />
        <img src="https://icms-image.slatic.net/images/ims-web/d4244292-1c85-4eb5-9c10-f4699421a300.jpg" alt="advertisements" />
      </Carousel>
    </div>
  );
};

export default Carouselia;
