import React, { useState, useEffect } from "react";
import { VIDEO_API, API_KEY } from "../utils/contants";
import { useSearchParams } from "react-router-dom";

import { calculateTimeAgo, formatNumber } from "../utils/contants";
import {
  HiThumbDown,
  HiThumbUp,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
} from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { BiSolidBellRing } from "react-icons/bi";



const VideoDescription = ({ info, channelInfo }) => {
  const [showDescription, setShowDescription] = useState(false);
  const {
    snippet: { channelTitle, title, description, publishedAt } = {},
    statistics: { viewCount, likeCount } = {},
  } = info ?? {};

  /*/info ?? {} uses the nullish coalescing operator (??) 
  to ensure that if info is null or undefined, an empty object {} 
  is used as a fallback. This prevents potential "Cannot read property '...' 
  of null" or "Cannot read property '...' of undefined" errors when 
  destructuring the object.*/

  console.log(info);

  const [issubscribe, setIsSubscribe] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  const truncatedDescription = showDescription
    ? description
    : `${description?.substring(0, 200)}...`;

  const { snippet: { thumbnails } = {}, statistics: { subscriberCount } = {} } =
    channelInfo ?? {};

  //optional chaining is very important
  return (
    <div className="m-2">
      <div className="m-2">
        <p className="font-medium text-xl">{title}</p>
        <div className="flex items-center mb-3 mt-1">
          <div>
            <img
              className="rounded-full h-12"
              src={thumbnails?.high?.url}
              alt="Avtaar"
            />
          </div>
          <div className="ml-2">
            <p className="font-bold">{channelTitle}</p>
            <p className="text-gray-500 text-sm">
              {formatNumber(subscriberCount) + " subscribers"}
            </p>
          </div>
          <div>
            {issubscribe ? (
              <div className="bg-black text-white flex font-semibold rounded-full ml-8 px-[0.87rem] py-[0.40rem] items-center ">
                <BiSolidBellRing className="text-xl mt-0" />
                <button className="ml-1" onClick={() => setIsSubscribe(false)}>
                  Subscribed
                </button>
              </div>
            ) : (
              <button
                className="bg-black text-white font-semibold w-32 rounded-full ml-8 px-[0.87rem] py-[0.40rem]"
                onClick={() => setIsSubscribe(true)}
              >
                Subscribe
              </button>
            )}
          </div>

          <div className="flex ml-28">
            <div className="bg-black text-white flex font-normal rounded-full ml-8 px-[0.87rem] py-[0.40rem] items-center">
              {isLike ? (
                <button
                  onClick={() => {
                    setIsLike(false);
                    //setIsDisLike(true);
                  }}
                  className="text-2xl ml-2"
                >
                  <HiThumbUp />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsLike(true);
                    setIsDisLike(false);
                  }}
                  className="ml-2 text-2xl"
                >
                  <HiOutlineThumbUp />
                </button>
              )}
              <p className="text-sm font-semibold ml-1">
                {formatNumber(likeCount)}
              </p>
              {isDisLike ? (
                <button
                  className="text-2xl ml-3"
                  onClick={() => {
                    setIsDisLike(false);
                    //setIsLike(true);
                  }}
                >
                  <HiThumbDown />
                </button>
              ) : (
                <button
                  className="text-2xl ml-3"
                  onClick={() => {
                    setIsDisLike(true);
                    setIsLike(false);
                  }}
                >
                  <HiOutlineThumbDown />
                </button>
              )}
            </div>
            <div className="bg-black text-white flex font-normal rounded-full ml-8 px-[0.87rem] py-[0.40rem]">
              <p className="text-2xl">
                <PiShareFat />
              </p>
              <button className="font-semibold ml-2">Share</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-2 p-2 \ bg-slate-100 rounded-md">
        <div className="flex font-semibold ">
          <p>{formatNumber(viewCount)}</p>
          <p className="ml-3">{calculateTimeAgo(publishedAt)}</p>
        </div>
        <div>
          <p>{truncatedDescription}</p>
          <button
            className="font-bold"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoInfo = () => {
  const [searchParams] = useSearchParams();
  const desiredId = searchParams.get("v");

  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    getVideos();
  }, [desiredId]); // Trigger getVideos when desiredId changes

  const getVideos = async () => {
    const data = await fetch(VIDEO_API + desiredId);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items[0]);

    // Extract channelId from videos and pass it to getChannel
    const channelId = json.items[0]?.snippet?.channelId;
    if (channelId) {
      getChannel(channelId);
    }
  };

  const getChannel = async (channelId) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
    );
    const json = await data.json();

    const channelInfo = json?.items?.[0] ?? null;

    console.log(channelInfo);
    setChannel(channelInfo);
  };

  return (
    <div className="flex flex-wrap">
      <VideoDescription info={videos} channelInfo={channel} />
    </div>
  );
};

export default VideoInfo;

