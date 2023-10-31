import React from 'react'
import { useSelector } from 'react-redux';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary,MdOutlineWatchLater } from "react-icons/md";
import {LuHistory} from "react-icons/lu";
import {GoVideo} from "react-icons/go"
import { Link } from 'react-router-dom';
const SideBar = () => {

  const isMenuOpen = useSelector((store)=>store.menuBar.isMenuOpen)

  if(!isMenuOpen) return null;


  return (
    <div className="ml-5 sticky left-0 top-[62px] h-full">
      <div className="w-40 cursor-pointer">
        <Link to={"/"}>
          {" "}
          <div className="flex  items-center bg-gray-100 font-medium  rounded-lg px-1  gap-2 ">
            <AiFillHome size={22} />
            <p className="my-2"> Home</p>
          </div>
        </Link>
        {/* <div className="flex  items-center hover:bg-gray-200   rounded-lg px-1  gap-2">
          <p className="my-2"> Shorts</p>
        </div> */}
        <div className="flex  items-center hover:bg-gray-200 rounded-lg px-1  gap-2">
          <MdOutlineSubscriptions size={22} />
          <p className="my-2"> Subscription</p>
        </div>
        <hr></hr>
      </div>
      <div className="cursor-pointer">
        <ul>
          <div className="flex  items-center hover:bg-gray-200   rounded-lg px-1  gap-2 ">
            <MdOutlineVideoLibrary size={22} />
            <li className="my-2">Library</li>
          </div>
          <div className="flex  items-center hover:bg-gray-200   rounded-lg px-1  gap-2 ">
            <LuHistory size={22} />
            <li className="my-2">History</li>
          </div>
          <div className="flex  items-center hover:bg-gray-200   rounded-lg px-1  gap-2 ">
            <GoVideo size={22} />
            <li className="my-2">Your videos</li>
          </div>
          <div className="flex  items-center hover:bg-gray-200   rounded-lg px-1 f gap-2 ">
            <MdOutlineWatchLater size={22} />
            <li className="my-2">Watch Later</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;