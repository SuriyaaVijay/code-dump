import React,{ useEffect, useState } from 'react';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';
import { API_KEY } from '../utils/contants';
import ShimmerUI from './MainShimmer';
const VideoComponent = () => {
 
  const [videoList,setVideoList] = useState([]);

  useEffect(()=>{
   const time =  setTimeout(()=>{ 
       data();
      
    },200)

    return (()=>{
      clearTimeout(time);
      window.scrollTo(0, 0);
    })
  },[]);

const data =  async() => {
 
   const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY);
   const json = await data.json();
  // console.log(json.items);
   setVideoList(json.items);
}

if(videoList.length===0){
  return <ShimmerUI/>;
}
  return (
    <div className="flex flex-wrap justify-center">
      {videoList.map((video)=>(<Link key={video.id} to={'/watch?v='+video.id}> <VideoCard info={video} /></Link>))}
     
    </div>
  )
}

export default VideoComponent;