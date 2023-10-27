import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/SideBarSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import CommentsContainer from './CommentContainer';
import VideoInfo from './VideoInfo';
const Watch = () => {
 const [searchParams] = useSearchParams();
 const videoId = searchParams.get("v");
//  console.log(searchParams.get("v"));
const dispatch = useDispatch();
 
useEffect(()=>{

 dispatch(closeMenu());

},[]);

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="mx-3">
          <iframe
            className="rounded-xl"
            width="840"
            height="400"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <div className='w-8/12'>
        <VideoInfo id={videoId}/>
        <CommentsContainer />
      </div>
    </div>
  );
}

export default Watch