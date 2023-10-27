import React from 'react'
import { Link } from 'react-router-dom';

const SlideButtons = () => {
  return (
   <div className='w-[100%] z-10 mx-auto sticky top-12 bg-white overflow-auto whitespace-nowrap'>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/"}>All</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=BMW bike"}>BMW</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Love Babar"}>Love Babar</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Data Analytics"}>Data Analytics</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Cars"}>Cars</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Moto Sport"}>Moto Sport</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Pubg"}>PubG</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=GTA-5"}>GTA-5</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Cartoon network"}>Cartoon Network</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=cooking"}>Cooking</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Bikes"}>Bikes</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=software"}>Software</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Cricket"}>Cricket</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Football"}>FootbAll</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Newes"}>Newes</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Meerut Vlogs"}>Meerut</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Dsa tutorials"}>DSA</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=What is computer programing"}>Computer Programing</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=Skills to build in 2023"}>Skiils</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=effective communication"}>Communication</Link>
      <Link className='inline-block mt-3 mx-2 bg-black/5 rounded-md text-sm focus:bg-black focus:text-white transition-colors ease-linear  px-3 py-1 text-center' to={"/search?s=English Speaking"}>English</Link>
   </div>
  )
}

export default SlideButtons;