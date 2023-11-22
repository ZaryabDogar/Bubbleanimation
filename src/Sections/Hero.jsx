import React, { useState,useEffect } from 'react';
import FloatingBubbles from '../Component/Floating'
import Navbar from '../Component/Navbar'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const Hero = () => {

  // for detect the scroll and remove the padding 
   //for changing the position fixed to relative
   const [isFixed, setIsFixed] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       const scrollPosition = window.scrollY;
       // Adjust this value based on when you want the Navbar to become fixed
       const threshold = 100;
 
       setIsFixed(scrollPosition > threshold);
     };
 
     // Attach the event listener when the component mounts
     window.addEventListener('scroll', handleScroll);
 
     // Detach the event listener when the component unmounts
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  return (
<section className='sm:h-[110vh] h-[70vh] overflow-hidden '> 
 <Navbar></Navbar>
     <FloatingBubbles> </FloatingBubbles>
     {/* remove the z index we can add but navbar overflow   */}
        <div className={` transition-all ease-in-out duration-700 relative   bottom-[90%]   bg-transparent  max-w-max mx-auto ${!isFixed?'pt-36':''}`} >
          <div className="flex w-full justify-center">
          <div className="text-center space-y-6" >
            <h1 className="md:text-7xl sm:text-5xl text-3xl font-inter font-bold text-[#1f2a4b;]  md:leading-[75px] sm:leading-[50px] bg-white 
           "  style={{ boxShadow: '5px 5px 100px 75px rgba(255,255,255)' ,
            // filter: 'drop-shadow(5px 50px 100px 80px rgba(255,255,255))' 
          }
          }>The fastest way <br /> to <span className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-600 bg-clip-text text-transparent"> pay. </span>Swipe your way <br /> through<span className="bg-gradient-to-r from-pink-500 via-red-600 to-yellow-300 bg-clip-text text-transparent"> checkout. </span></h1>
            <p className="md:text-lg text-sm font-inter font-[600] text-[#6e7898]   bg-white sm:block hidden
           "  style={{ boxShadow: '5px 5px 100px 75px rgba(255,255,255)' ,
            // filter: 'drop-shadow(5px 50px 100px 80px rgba(255,255,255))' 
          }
          }>Built on existing payment rails, enabling you to transact on your terms, faster and on demand - <br /> all while <span className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-600 bg-clip-text text-transparent font-bold"> earning 0.5% cashback. </span> Let queueing be a thing of the past!</p>
          </div>
          </div>
          <div className="flex justify-center font-roboto py-6 sm:space-x-10 space-x-3">
            <button className="flex justify-center bg-[#1f2a4b] p-3 rounded-xl items-center">
              <span className="text-white sm:text-5xl text-3xl"><FaApple /></span>
              <span className="px-3 flex flex-col font-semibold "><p className="sm:text-[12px] text-white text-[10px]">Download on the</p>
              <p className="sm:text-xl text-white font-bold text- ">App Store</p>
              </span>
            </button>
            <button className="flex justify-center bg-white p-3 rounded-xl shadow-sm hover:shadow-xl items-center">
              <span className="text-[#6e7898] sm:text-5xl text-3xl"><FaGooglePlay /></span>
              <span className="px-3 flex flex-col font-semibold "><p className="sm:text-[12px] text-[10px] text-[#6e7898] ">Download on the</p>
              <p className="sm:text-xl text-[#6e7898] font-bold ">App Store</p>
              </span>
            </button>
          </div>
</div>
</section>
    )
}

export default Hero