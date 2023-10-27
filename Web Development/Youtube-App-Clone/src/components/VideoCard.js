import React from 'react';
const VideoCard = ({info}) => {

  // const logo =
  //   "https://youtube.googleapis.com/youtube/v3/channels?key=AIzaSyD_0bdL7srqwBdJUhZG-QGhmOSxzaLp-tw";
  // console.log(info);
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;
  
  return (
    <div className="w-80 m-2 cursor-pointer">
      <img className='w-full rounded-xl' alt="thumbnail" src={thumbnails.medium.url}></img>
      <ul className="">
        
        <li className='font-medium'>{title}</li>
        <li className='mt-1'>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;