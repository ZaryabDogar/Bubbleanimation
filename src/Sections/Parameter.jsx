import React from 'react';

const Parameter = () => {
	return (
		<>
			<section className="md:px-42 px-5 w-full  space-y-12 ">
				<div className="flex md:flex-row flex-col justify-center  items-center">
					<div className="">
						<img src="/parameter.jpg" width={248} height={248} alt="" />
					</div>
					<div className="space-y-7 sm:pl-12 text-center">
						<p className="font-roboto text-[#1f2a4b;] sm:text-5xl text-3xl font-bold">
							Set your parameters.
						</p>
						<p className="font-roboto text-[#6e7898] font-semibold sm:text-sm text-[10px]">
							Use our technology to simplify payments, skip the queues
							completely in-stores. <br /> Available on IOS, coming soon on
							Android.
						</p>
					</div>
				</div>
                <div className="relative sm:px-28 ">
                    <hr className='border-[1px] border-[#6e7898] ' />
                      <div className=" flex  justify-center w-full  ">
          <button className=" drop-shadow-lg hover:drop-shadow-xl hover:-translate-y-1 transition-all ease-in-out duration-75 flex items-center text-lg py-1 px-6 bg-white rounded-4xl  w-fit    text-[12px] -bottom-5  absolute">
            
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-bZQynM iJaZLJ"><path d="M1 2.76619V11.2338C1 12.0111 1.84797 12.4912 2.5145 12.0913L9.57084 7.85749C10.2182 7.46909 10.2182 6.53091 9.57084 6.14251L2.5145 1.9087C1.84797 1.50878 1 1.9889 1 2.76619Z" stroke="url(#paint0_linear)" stroke-width="2"></path><defs><linearGradient id="paint0_linear" x1="11" y1="1" x2="7.04888" y2="14.5814" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>
            
            <p className="pl-2 text-black">Watch Our Video</p></button>
        </div>
                </div>
			</section>
		</>
	);
};

export default Parameter;
