import React from 'react';
import { FaApple, FaGooglePlay, FaYoutube } from 'react-icons/fa';
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Fotter = () => {
	return (
		<>
			<div
				className="h-[3px] w-full"
				style={{
					background:
						'linear-gradient(63.74deg, rgb(0, 84, 253) -16.64%, rgb(255, 25, 247) 18.08%, rgb(255, 46, 93) 49.91%, rgb(255, 200, 7) 87.53%, rgb(230, 185, 116) 122.25%, rgb(230, 185, 116) 122.25%)',
					// Add other styles as needed
					// For example, you can set height, width, padding, etc.
				}}
			></div>
			<footer className="py-8 px-14 bg-black text-white font-roboto h-full">
				<div className="flex md:justify-between justify-center md:flex-row flex-col items-center space-y-8 md:space-y-0">
					{/* LINKS  */}
					<div className="flex space-x-5">
						<div
							className="flex flex-col justify-center items-start
           space-y-5 "
						>
							<p className="text-xl font-bold">Navigate</p>
							<ul className="space-y-2 flex flex-col">
								<a href="">
									<li className="cursor-pointer hover:text-blue-500 opacity-50 ">
										About
									</li>
								</a>
								<a href="">
									<li className="cursor-pointer hover:text-blue-500 opacity-50 ">
										Careers
									</li>
								</a>
								<a href="">
									<li className="cursor-pointer hover:text-blue-500 opacity-50 ">
										Covid-19 Resources
									</li>
								</a>
								<a href="">
									<li className="cursor-pointer hover:text-blue-500 opacity-50 ">
										Terms
									</li>
								</a>
								<a href="">
									<li className="cursor-pointer hover:opacity-100 opacity-50 flex space-x-2 text-lg">
										<FaGooglePlay />
										<FaApple />
									</li>
								</a>
							</ul>
						</div>
						<div className=" w-[1px] bg-white opacity-50"></div>

						<div
							className="flex flex-col justify-center items-start
           space-y-5 "
						>
							<p className="text-xl font-bold">Contact</p>
							<div className="flex space-y-3 flex-col font-[400]">
								<li className="flex text-sm space-x-4 items-start">
									<FaLocationDot />
									<p className=" ">
										20-22 <br />
										Wenlock Road <br />
										London N1 7GU{' '}
									</p>
								</li>
								<li className="flex text-sm space-x-4 items-start">
									<FaPhoneFlip />
									<p className=" ">
										03333399063
										<br />
										Mon - Fri 9am - 5pm
									</p>
								</li>
								<li className="flex text-sm space-x-4 items-start">
									<IoMdMail />
									<p className=" ">paykart@europe.com</p>
								</li>
							</div>
						</div>
					</div>

					<div className="">
						<div className="flex flex-col space-y-2">
							<p className="text-lg font-bold">Insights</p>
							<p className="text-sm font-[400]">
								The latest product launches and offerings straight to your mail
							</p>
							<input
								type="text"
								className=" w-full outline-none p-2 rounded-sm text-black"
								placeholder="Enter Your Email Adress"
							/>
							<div className="bg-blue-600 w-full cursor-pointer text-center p-2 rounded-sm ">
								<p className="text-lg font-bold">Notify Me</p>
							</div>
							<p className="text-sm font-[300]">
								We will never share your details. See our{' '}
								<span className="font-bold">
									{' '}
									<a href=""> Privacy Policy</a>
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center py-8">
					<div className="flex flex-col space-y-2">
						<ul className="sm:text-3xl text-2xl flex space-x-3">
							<a href="#">
								<li className="opacity-50 hover:opacity-100 ">
								<FaInstagram />
								</li>
							</a>
							<a href="#">
								<li className="opacity-50 hover:opacity-100 ">
								<FaTwitter />
								</li>
							</a>
							<a href="#">
								<li className="opacity-50 hover:opacity-100 ">
									<FaYoutube />
								</li>
							</a>
						</ul>
                        <p className="text-center opacity-50 font-[500] text-[12px]">© 2020</p>
                        
					</div>

				</div>
			</footer>
		</>
	);
};

export default Fotter;
