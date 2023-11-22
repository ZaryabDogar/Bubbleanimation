import React from 'react';

const Paykart = () => {
	return (
		<section className="py-8 md:px-32 px-16 ">
			<div className=" flex flex-col space-y-12">
				<div className=" w-full flex justify-center">
					<div className="bg-gradient-to-r from-green-500 via-green-400 to-green-600 w-[5.25rem] h-[5.25rem] rounded-full flex justify-center items-center mr-[-5px]">
						<svg
							display="block"
							fill="none"
							height="43"
							viewBox="0 0 33 43"
							width="33"
							className="sc-ckVGcZ dCdR"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M1.81982 33.2295C0.774244 32.5899 0.134766 31.4511 0.134766 30.2281V23.3992C0.134766 23.1377 0.204782 22.8858 0.335478 22.6617C0.74157 21.9615 1.64244 21.7236 2.3426 22.1343L17.7555 31.1196C18.6564 31.6471 19.2118 32.6087 19.2118 33.6542V40.7305C19.2118 41.0526 19.123 41.3746 18.9551 41.65C18.4463 42.4809 17.3633 42.7423 16.5324 42.2335L1.81982 33.2295ZM24.7943 20.2624C25.6952 20.7899 26.2507 21.7516 26.2507 22.797V37.1549C26.2507 37.5798 26.0219 37.9718 25.6532 38.1772L22.2784 40.0771C22.2364 40.1004 22.1898 40.119 22.1431 40.133V32.1605C22.1431 31.1289 21.6016 30.1721 20.7148 29.6399L7.17837 21.5415V12.5421C7.17837 12.2807 7.24839 12.0286 7.37908 11.8046C7.78517 11.1044 8.68605 10.8664 9.3862 11.2771L24.7943 20.2624ZM31.5393 9.65743C32.4448 10.1802 33.0003 11.1511 33.0003 12.1967V33.1688C33.0003 33.5982 32.7622 33.9949 32.3842 34.2003L29.1866 35.9274V21.3267C29.1866 20.2952 28.6453 19.3429 27.7631 18.8108L13.9279 10.5116V1.97434C13.9279 1.71295 13.9979 1.4609 14.124 1.23684C14.53 0.536685 15.4309 0.298631 16.1311 0.704724L31.5393 9.65743Z"
								fill="white"
							></path>
						</svg>
					</div>
					<div className="bg-gradient-to-r from-pink-500 via-red-600 to-yellow-300 w-[5.25rem] h-[5.25rem] rounded-full flex justify-center items-center ml-[-5px]">
						<svg
							width="40"
							height="40"
							viewBox="0 0 52 52"
							color="white"
							fill="currentColor"
							className="sc-htoDjs hFciXq"
						>
							<path d="M15.65,29.55l9.74-6V2a23.9,23.9,0,0,0-9.74,2.33Zm-2.08,1.27V5.5A24,24,0,0,0,4.41,36.43Zm13.91,7.49,9.74-6V4.81a23.77,23.77,0,0,0-9.74-2.73Zm-2.09,1.3V26l-20,12.26a24.09,24.09,0,0,0,8.55,8.5ZM39.3,31l10.62-6.58a23.91,23.91,0,0,0-3.09-10.27L39.3,18.55Zm0-24.93V16.2l6.46-3.77A24,24,0,0,0,39.3,6.06Zm0-2.41h0A26,26,0,1,1,26,0,26,26,0,0,1,39.3,3.66ZM16,47.8A24,24,0,0,0,50,26.77Z"></path>
						</svg>
					</div>
				</div>
				<div className="flex md:flex-row flex-col font-roboto text-[#1f2a4b;] justify-between items-center">
					{' '}
					<p className=" md:text-5xl text-2xl font-bold sm:text-start text-center">Paykart teams up with <br /> Make-A-Wish <span className="text-[15px]">®</span></p>
					<p className=" md:text-xl text-sm font-bold text-center">Shop guilt free and make <br />wishes come true, wishful?</p>
                    
				</div>
                <div className="">
                <p className="font-roboto text-[#6e7898] font-semibold sm:text-sm text-[10px] md:text-start text-center">Our partnership with Make A Wish allows our ecosystem members to circumvent the act of kindness and giving. Easily opt-in and we’ll round up your cart total to nearest pound, to help make wishes come true for terminally ill children. Shopping couldn’t truly be as rewarding!</p>
                </div>
			</div>
            <div className="sm:px-14 sm:py-24 py-8">
            <hr className='border-[1px] border-[#6e7898] ' />

            </div>
		</section>
	);
};

export default Paykart;
