import React from 'react';
import 'tailwindcss/tailwind.css';
import './Discover.css';
import { FaApple } from "react-icons/fa";

export const Discover = () => {
	return (
		<section className="p-14  md:px-32 bg-white max-w-screen-2xl sm:flex justify-center w-full ">
			<div className="flex md:flex-row flex-col mx-auto items-center w-full space-y-7">
				<div className="">
					{' '}
					<img src="/Discover.png" alt="Discover"   />
				</div>

				<div className="lg:pl-10 space-y-5 flex justify-center flex-col  md:text-start text-center">
          <p className="font-roboto text-[#1f2a4b;] sm:text-5xl text-3xl font-bold" >Discover your favourite <br /> brands near you.</p>
          <p className="font-roboto text-[#6e7898] font-semibold sm:text-sm text-[10px]">Use our technology to simplify payments, skip the queues completely in-stores. Available on IOS,</p>
          <div className="flex justify-center md:justify-start">
					<div className="phone-input lg:w-[480px] sm:w-[50%]">
            
						<input type="number" id="phoneNumber"  required min="1" />
						<label
							htmlFor="phoneNumber"
							className="z-20 font-roboto text-[#6e7898] text-xs"
						>
							Enter your phone number
						</label>
					</div>
          <button className="bg-black text-white font-bold  p-3 rounded-md text-[15px]">ENTER</button>
          </div>
  <div className=" flex md:justify-start justify-center w-full  ">
          <button className="text-white flex items-center text-lg py-1 px-6 bg-black rounded-4xl  w-fit mt-5  hover:bg-gradient-to-r from-purple-500 via-purple-500 to-pink-500 hover:-translate-y-3
           transition-all ease-in-out duration-300 text-[12px]"><FaApple className='text-lg' /> <p className="pl-2">Download now  </p></button>
        </div>

				</div>
      
			</div>
		</section>
	);
};
