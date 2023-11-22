import React from 'react'
import './Anything.css'; 
const Anything = () => {
  return (
    <>
<section className="sm:py-0 py-14">
    <div className="">
    <div className="font-roboto text-[#1f2a4b;] flex w-full text-center justify-center flex-col space-y-5">
    <p className=" sm:text-5xl text-3xl font-bold">
    Almost anything!
					</p>
                    <p className="font-roboto text-[#6e7898] font-semibold sm:text-sm text-[10px]">
                    We're building an ecosystem with forward thinking brands <br /> that want make life a little more better. Use our technology to <br /> supercharge your payments to the next level.
					</p>
    </div>
    {/* animation*/}
    <div className="flex flex-col justify-center w-full items-center py-8 space-y-4">

      {/* row1 */}
    <div className="picture-container max-w-7xl">
      <div className="row">
        {Array.from({ length: 16 }, (_, index) => (
          <img key={index} src={`row${(index % 8) + 1}.png`} alt={`Image ${index + 1}`} className='md:w-[160px] sm:w-[100px] w-[80px]' />
        ))}
      </div>
    </div>
    {/* row2 */}
    <div className="picture-container max-w-7xl">
      <div className="roww">
        {Array.from({ length: 16 }, (_, index) => (
          <img key={index} src={`row${(index % 8) + 1}.png`} alt={`Image ${index + 1}`} className='md:w-[160px] sm:w-[100px] w-[80px]' />
        ))}
      </div>
    </div>
    </div>


    </div>
 
</section>
   <div className="md:px-44 px-5  ">
            <hr className='border-[1px] border-[#6e7898] ' />

            </div>
</>
  )
}

export default Anything