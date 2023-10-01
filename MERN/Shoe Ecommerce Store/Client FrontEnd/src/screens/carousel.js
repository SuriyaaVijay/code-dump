import React from 'react'
import Slider from 'react-slick';
import Carousel from 'nuka-carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carouselia = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     // centerMode: true,
    //     variableWidth: true,
    //     adaptiveHeight: true,
    //     swipeToSlide: true,
    //     autoplay: true,
    //     speed: 1000,
    //     autoplaySpeed: 4000,
    //     // fade:"true",
    //     draggable:true,
    //     arrows:false,
    //     dots: false,
    //     // dotsClass: "slick-dots slick-thumb",

    //   };

  return (
    <div>
{/* 
<Slider {...settings}>
          <img src={"https://icms-image.slatic.net/images/ims-web/1a4c0320-2b2b-4f6b-8464-a239af93258f.jpg"} style={{width:"100vw", height:"50vw"}} />
          <img src={"https://icms-image.slatic.net/images/ims-web/9e1304be-26e8-4b41-ba7d-8004825082dc.jpg"} style={{width:"100vw", height:"50vw"}} />
          <img src={"https://icms-image.slatic.net/images/ims-web/d4244292-1c85-4eb5-9c10-f4699421a300.jpg"} style={{width:"100vw", height:"50vw"}} />
        </Slider> */}


<Carousel autoplay>
      <img src="https://icms-image.slatic.net/images/ims-web/1a4c0320-2b2b-4f6b-8464-a239af93258f.jpg" />
      <img src="https://icms-image.slatic.net/images/ims-web/9e1304be-26e8-4b41-ba7d-8004825082dc.jpg" />
      <img src="https://icms-image.slatic.net/images/ims-web/d4244292-1c85-4eb5-9c10-f4699421a300.jpg" />
    
    </Carousel>


    </div>
  )
}

export default Carouselia