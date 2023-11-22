import { useEffect, useState } from 'react';
const Model = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		// Set isModalOpen to true when the component mounts
		setIsModalOpen(true);
	}, []);

	const closeModal = () => {
		setIsModalOpen(false);
		console.log('clicked');
	};

	return (
		<>
			{isModalOpen && (
                <div className=" ">
				<div className="fixed inset-0 flex items-center justify-center  z-50 bg-black/80 w-full h-screen ">
					<div className="modal relative  bg-white p-6 rounded shadow-lg  max-w-[600px] text-center px-6 mx-3">
						{/* Your information goes here */}
						<p className=' font-bold font-roboto text-xl '>Help Stop The Spread Of COVID-19</p>
                        <p className="text-sm">We're here to help stop the spread. Click below to learn more about how our Scan & Go technology can help your business during the COVID-19 outbreak</p>
						{/* Close button */}
						<span
							className="close absolute -top-16 -right-6 m-4 text-5xl cursor-pointer text-white "
							onClick={closeModal}
						>
							&times;
						</span>
					</div>
				</div>
                
                </div>
			)}
		</>
	);
};

export default Model;
