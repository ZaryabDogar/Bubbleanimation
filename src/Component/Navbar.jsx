import React, { useState,useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoBookmarks } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {
    const [isListVisible, setListVisible] = useState(false);
    const [isListVisible1, setListVisible1] = useState(false);
    const [isListVisible2, setListVisible2] = useState(false);
    const [isListVisible3, setListVisible3] = useState(false);
    const [isListVisible4, setListVisible4] = useState(false);
    const [isListVisible5, setListVisible5] = useState(false);
    const [ismenuevisible, setmenuevisible] = useState(false);


    //handel menue 
    const handemenuevisible=()=>{
        setmenuevisible(!ismenuevisible)
   
    }
    // list 0 -1
    const handleMouseEnter = () => {
        setListVisible(true);
       
      };
      const handleMouseLeave = () => {
        setListVisible(false);
  

      };

    //   list2 -1
    const handleMouseEnter1 = () => {
        setListVisible1(true);
     
      };
      const handleMouseLeave1 = () => {
        setListVisible1(false);
      
      };

    //   list3 -2
    const handleMouseEnter2 = () => {
        setListVisible2(true);
   
      };
      const handleMouseLeave2= () => {
        setListVisible2(false);


      };
// list 4-3
const handleMouseEnter3 = () => {
    setListVisible3(true);

  };
  const handleMouseLeave3= () => {
    setListVisible3(false);


  };

//   list 5 -4
const handleMouseEnter4 = () => {
    setListVisible4(true);

  };
  const handleMouseLeave4= () => {
    setListVisible4(false);


  };
//   list 6 -5
const handleMouseEnter5 = () => {
    setListVisible5(true);

  };
  const handleMouseLeave5= () => {
    setListVisible5(false);


  };

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
   <nav className={`bg-transparent  top-0 right-0 w-full  z-40 ${!isFixed? 'fixed':'relative'} transition-all ease-in-out duration-700`}>
  {!ismenuevisible&&  <div className="flex justify-between sm:p-8 sm:px-10 p-6 w-full sm:items-end ">
        <div className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] ">
            <img src="/logo.png" alt="logo"  />
        </div>
        <div className="sm:flex  hidden">
            <ul className="flex text-sm font-roboto pr-5 text-[#989fb7] font-semibold items-center transition-all ease-in-out duration-500">
                <li className="md:px-4 px-2 py-2  cursor-pointer hover:text-black transition-all ease-in-out duration-500 rounded-2xl hover:shadow-xl"  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Users</li>
                <li className="md:px-4 px-2 py-2 cursor-pointer hover:text-black transition-all ease-in-out duration-500 rounded-2xl hover:shadow-xl" onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}>Retailers</li>
                <li className="md:px-4 px-2 py-2 cursor-pointer hover:text-black transition-all ease-in-out duration-500 rounded-2xl hover:shadow-xl" onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}>Resources</li>
                <li className="md:px-4 px-2 py-2 cursor-pointer hover:text-black transition-all ease-in-out duration-500 rounded-2xl hover:shadow-xl" onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}>Support</li>
                <li className="md:px-4 px-2 py-2 cursor-pointer hover:text-black transition-all ease-in-out duration-500 rounded-2xl hover:shadow-xl" onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}>Contact</li>
                <li className="md:px-4 px-2 py-2 cursor-pointer text-black py-2 shadow-xl rounded-3xl bg-white" onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}>Login</li>
            </ul>
        </div>
        <div className="sm:hidden flex items-center cursor-pointer"><GiHamburgerMenu className="text-2xl" onClick={handemenuevisible} /></div>
    </div>}

{/* small screen menue  */}
{ismenuevisible&&
<div className="w-full flex justify-center my-8">
<div    className={`absolute z-30 bg-white shadow-xl p-4 w-full rounded-lg  max-w-[90%] transform  transition-all${
        ismenuevisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10%]'
      }duration-300`}>
    <div className="flex justify-between ">
        <div className="flex space-x-3"><img src="/logo.png" alt="" className=" w-[30px] h-[30px]"/> <p className="text-xl font-roboto font font-semibold "> Paykart</p> </div>
        <MdCancel className="bg-white text-black text-3xl" onClick={handemenuevisible} />
    </div>
    <p className="text-xl font-roboto font-semibold py-3">Changing the face of instore payments. <span className="text-blue-600"> Done.</span></p>
    <div className="grid grid-cols-1 py-3 space-y-8">
        <div className="flex justify-between "> <p className="font-semibold font-roboto text-xl">For Retailers</p>
        <IoIosArrowDown className="text-xl font-bold "/>
        </div>
        <div className="flex justify-between "> <p className="font-semibold font-roboto text-xl">For Users</p>
        <IoIosArrowDown className="text-xl font-bold "/>
        </div>
        <div className="flex justify-between "> <p className="font-semibold font-roboto text-xl">Pricing</p>
        <IoIosArrowDown className="text-xl font-bold "/>
        </div>
        <div className="flex justify-between "> <p className="font-semibold font-roboto text-xl">Resources</p>
        <IoIosArrowDown className="text-xl font-bold "/>
        </div>
        <div className="flex justify-between "> <p className="font-semibold font-roboto text-xl">Company</p>
        <IoIosArrowDown className="text-xl font-bold "/>
        </div>
    </div>
    <div className="flex w-full justify-center py-3 flex-col space-y-4"> <button className="py-2 px-6 text-white font-roboto font-semibold bg-blue-600 rounded-3xl" >START FREE</button>
    <p className="font-roboto text-lg font-semibold">Already have an account ? <a href="#" className='decoration-transparent text-blue-500'>log in</a></p>
    <div className="flex justify-center space-x-6">
        <FaInstagram className='text-white  text-2xl bg-blue-700 p-1 rounded-lg'/>
        <FaLinkedin  className='text-white  text-2xl bg-blue-700 p-1 rounded-lg'/>
        <FaTwitter  className='text-white  text-2xl bg-blue-700 p-1 rounded-lg'/>
        </div>
    </div>
</div>
</div>
}


    {/* list1 */}
  { isListVisible&& <div className="absolute right-[35%] top-[103px] p-10 bg-white max-w-[400px] shadow-xl rounded-sm cursor-pointer" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        <div className="flex justify-between items-center space-x-1  max-w-[110px]"> <IoBookmarks  className='text-white  text-4xl bg-[#6d28d9] p-2 rounded-xl'/> <p className="text-2xl font-roboto font-semibold">Users</p></div>
        <p className="py-5 text-lg">Use Paykart to make frictionless payments in stores without having to wait in line</p>
   <div className="grid grid-cols-2 space-y-3 text-lg font-roboto"><p>How it works</p> <p>Download Android</p> <p>Campagin</p> <p>Contact</p> <p>F.A.Q</p> <p>Download IOS</p></div>
    </div>}

    {/* list 2  */} 
    { isListVisible1&& <div className="absolute right-[25%] top-[103px] p-10 bg-white max-w-[400px] shadow-xl rounded-sm cursor-pointer" onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}>
        <div className="flex justify-between items-center space-x-1  max-w-[150px]"> <IoBookmarks  className='text-white  text-4xl bg-[#6d28d9] p-2 rounded-xl'/> <p className="text-2xl font-roboto font-semibold">Retailers</p></div>
        <p className="py-5 text-lg">Leverage technology to supercharge your digital footprint</p>
   <div className="grid grid-cols-1 space-y-3 text-lg font-roboto"><p>Reatail solution </p> <p>Intelligence</p> <p>Eatry Solutions</p> <p>Pricing</p> </div>
    </div>}
    {/* list 3 */}
    { isListVisible2&& <div className="absolute right-[20%] top-[103px] p-10 bg-white max-w-[400px] shadow-xl rounded-sm cursor-pointer" onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}>
        <div className="flex justify-between items-center space-x-1  max-w-[170px]"> <IoBookmarks  className='text-white  text-4xl bg-[#6d28d9] p-2 rounded-xl'/> <p className="text-2xl font-roboto font-semibold">Resources</p></div>
        <p className="py-5 text-lg">Leverage technology to supercharge your digital footprint</p>
   <div className="grid grid-cols-1 space-y-3 text-lg font-roboto"><p>Reatail solution </p> <p>Intelligence</p> <p>Eatry Solutions</p> <p>Pricing</p> </div>
    </div>}

    {/* list 4 */}
    { isListVisible3&& <div className="absolute right-[15%] top-[103px] p-10 bg-white max-w-[400px] shadow-xl rounded-sm cursor-pointer" onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}>
        <div className="flex justify-between items-center space-x-1  max-w-[150px]"> <IoBookmarks  className='text-white  text-4xl bg-[#6d28d9] p-2 rounded-xl'/> <p className="text-2xl font-roboto font-semibold">Support</p></div>
        <p className="py-5 text-lg">Leverage technology to supercharge your digital footprint</p>
   <div className="grid grid-cols-1 space-y-3 text-lg font-roboto"><p>Reatail solution </p> <p>Intelligence</p> <p>Eatry Solutions</p> <p>Pricing</p> </div>
    </div>}
    {/* list 5 */}
    { isListVisible4&& <div className="absolute right-[7%] top-[103px] p-10 bg-white max-w-[400px] shadow-xl rounded-sm cursor-pointer" onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}>
        <div className="flex justify-between items-center space-x-1  max-w-[150px]"> <IoBookmarks  className='text-white  text-4xl bg-[#6d28d9] p-2 rounded-xl'/> <p className="text-2xl font-roboto font-semibold">Contact</p></div>
        <p className="py-5 text-lg">Leverage technology to supercharge your digital footprint</p>
   <div className="grid grid-cols-1 space-y-3 text-lg font-roboto"><p>Reatail solution </p> <p>Intelligence</p> </div>
    </div>}
    {/* Login list 6  */}
    { isListVisible5&& <div className="absolute right-[2%] top-[103px] p-7 bg-white max-w-[400px] shadow-xl rounded-sm cursor-pointer" onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}>
        <div className="flex justify-between items-center space-x-1  max-w-[150px]"> <FaDroplet   className='text-white  text-4xl bg-[#6d28d9] p-2 rounded-xl'/> <p className="text-2xl font-roboto font-semibold">login</p></div>
        <p className="py-5 text-lg">Leverage technology to supercharge your digital footprint</p>
   <div className="grid grid-cols-1 space-y-3 text-lg font-roboto"><p>POS gateaway</p> <p>Retail Dashboard</p> </div>
    </div>}


   </nav>

  )
}

export default Navbar