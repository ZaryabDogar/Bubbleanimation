
import React, { useState, useEffect } from 'react';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const Reward = () => {
    const [count, setCount] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render
  return (
   <section className="w-full py-28">
<div className="flex flex-col justify-center w-full space-y-16">
<div className="flex  flex-col font-roboto text-[#1f2a4b;] justify-between items-center space-y-16 w-full">
					{' '}
					<p className=" md:text-5xl text-2xl font-bold sm:text-start text-center">Rewarding you on all your transactions.</p>
	                <div> <p className="bg-gradient-to-r from-pink-500 via-red-600 to-yellow-300 bg-clip-text text-transparent md:text-5xl text-2xl font-bold sm:text-start text-center font-inter">1207999.{count}</p></div>
					<p className=" md:text-5xl text-2xl font-bold sm:text-start text-center">Our technology partners</p>

                    <div className="flex justify-between py-3 px-16 border rounded-2xl md:w-[50%] space-x-3"> 
                    <img src="/klarna.png" alt="klarna  " className='sm:w-[168px] sm:h-[38px]  w-[148px] h-[30px]' />
                    <img src="/applepay.png" alt="klarna  " className='sm:w-[123px] sm:h-[51px] w-[148px] h-[41px]' />
                    </div>
			
                    
				</div>

                <div className="w-[80%] max-w-screen-xl mx-auto font-roboto md:p-24 p-5 rounded-3xl text-white space-y-8"  style={{
      background: 'linear-gradient(63.74deg, rgb(0, 84, 253) -16.64%, rgb(255, 25, 247) 18.08%, rgb(255, 46, 93) 49.91%, rgb(255, 200, 7) 87.53%, rgb(230, 185, 116) 122.25%, rgb(230, 185, 116) 122.25%)',
      // Add other styles as needed
      // For example, you can set height, width, padding, etc.
    }}>
                <p className=" md:text-5xl text-2xl font-bold  text-center  "  >Pay your way</p>
                <p className=" md:text-xl text-lg font-bold  text-center">We're constantly growing - to give
you the hassle-free way to checkout</p>
                <div className="flex justify-center font-roboto py-6 md:space-x-10 md:space-y-0 md:flex-row flex-col space-y-3">
            <button className="flex justify-center bg-[#1f2a4b] p-3 rounded-xl items-center">
              <span className="text-white sm:text-5xl text-3xl"><FaApple /></span>
              <span className="px-3 flex flex-col font-semibold "><p className="sm:text-[12px] text-white text-[10px]">Download on the</p>
              <p className="sm:text-xl text-white font-bold text- ">App Store</p>
              </span>
            </button>
            <button className="flex justify-center bg-[#1f2a4b] p-3 rounded-xl items-center">
              <span className="text-white sm:text-5xl text-3xl"><FaGooglePlay /></span>
              <span className="px-3 flex flex-col font-semibold "><p className="sm:text-[12px] text-white text-[10px]">Download on the</p>
              <p className="sm:text-xl text-white font-bold text-">App Store</p>
              </span>
            </button>
          </div>

                </div>

</div>

   </section>
  )
}

export default Reward