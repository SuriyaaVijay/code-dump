import React, { useEffect, useState } from "react";
import menu from "../assets/hamburger-menu.jpg";
import Logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/SideBarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";
import {IoSearchOutline} from "react-icons/io5";
import {FaRegBell} from "react-icons/fa";
import { USER_PROFILE } from "../utils/contants";
import{BiVideoPlus} from "react-icons/bi";
import { Link,useSearchParams } from "react-router-dom";
import { closeSearch, openSearch } from "../utils/searchOpen";
import { useNavigate } from "react-router-dom";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlinePauseCircle } from "react-icons/ai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Header = () => {
  const [voiceAssistant, setVoiceAssistant] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [serachList, setSerachList] = useState([]);
  const [searchUrl] = useSearchParams();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const searchToogle = useSelector((store) => store.searchToogle.isSearchOpen);
  const dispatch = useDispatch();
 
     const startListening = () => {
       if(!voiceAssistant){
         SpeechRecognition.stopListening();
        }
        else{
          resetTranscript();
          SpeechRecognition.startListening({
            continuous: true,
            language: "en-IN",
          });
      }
     };
     const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
       useSpeechRecognition();

  useEffect(()=>{
    const search = document.getElementById("search-input");
    search.blur();
  },[searchUrl]) 

  useEffect(() => {

    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {
        setSerachList(searchCache[searchQuery]);
      } else {
        filterDataHandler();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
  
    useEffect(() => {
      setSearchQuery(transcript);
      const t1 = setTimeout(() => {
        SpeechRecognition.stopListening();
        setVoiceAssistant(true);
      }, 5000);

      return () => clearTimeout(t1);
    }, [transcript]);

  const changeUrlHandler=()=>{
    navigate("/search?s="+searchQuery);
    setVoiceAssistant(true);
    SpeechRecognition.stopListening();
  }

  const filterDataHandler = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("Api calling for - "+searchQuery);
    setSerachList(json[1]);

    // Update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  function menuHandler() {
    dispatch(toggleMenu());
  }


    function listHandler (){
      dispatch(closeSearch());
    }

  return (
    <div className="grid grid-flow-col text-center z-20  sticky top-0 bg-white">
      <div className="col-span-1 flex items-center">
        <img
          onClick={menuHandler}
          className=" cursor-pointer my-2 ml-2 h-8"
          alt="logo"
          src={menu}
        ></img>
        <a href="/">
          <img className="cursor-pointer mx-4 h-5" alt="logo" src={Logo}></img>
        </a>
      </div>
      <div onBlur={listHandler} tabIndex={0} className="z-50 col-span-8">
        <div className="w-full flex items-center mx-10 mt-2">
          <input
            id="search-input"
            className="border-[1px] border-gray-400 bg-gray-50 w-3/5 py-[5px] pl-4 rounded-l-full focus:outline-gray-400"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => dispatch(openSearch())}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                changeUrlHandler();
              }
            }}
          ></input>
          <span
            onClick={changeUrlHandler}
            className="cursor-pointer p-[7px] px-4 bg-black/5 border-gray-400 rounded-r-full border-[1px] "
          >
            <IoSearchOutline size={20} />
          </span>
          {browserSupportsSpeechRecognition ? (
            <span
              className="ml-2 cursor-pointer"
              onClick={() => {
                startListening();
                setVoiceAssistant(!voiceAssistant);
                dispatch(openSearch());
              }}
            >
              {voiceAssistant ? (
                <MdKeyboardVoice size={30} />
              ) : (
                <AiOutlinePauseCircle size={30} />
              )}
            </span>
          ) : null}
        </div>
        {searchToogle && (
          <div className="fixed top-11 ml-10 mt-1 w-[31rem] text-start bg-white rounded-xl shadow-lg border-gray-200">
            <ul>
              {serachList.slice(0, 7).map((s, i) => (
                <Link
                  key={i}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setSearchQuery(s);
                  }}
                  to={"/search?s=" + s}
                >
                  <li className="py-1 flex items-center gap-2 px-2 my-1 rounded-lg border-gray-400 hover:bg-gray-200">
                    <IoSearchOutline />
                    <span>{s}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="cursor-pointer col-span-1 flex gap-7 items-center text-2xl font-medium justify-center h-10 my-auto w-4/5">
        <BiVideoPlus />
        <FaRegBell />
        <img className="h-11 rounded-full" alt="profile" src={USER_PROFILE} />
      </div>
    </div>
  );
};

export default Header;
