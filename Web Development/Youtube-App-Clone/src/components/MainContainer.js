import React from 'react'
import SlideButtons from "./SlideButtons";
import VideoComponent from './VideoComponent';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div className='w-[85vw] mx-auto '>
        <SlideButtons />
        <VideoComponent />
    </div>
  )
}

export default MainContainer;