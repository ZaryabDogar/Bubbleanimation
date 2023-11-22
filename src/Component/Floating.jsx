// Import React and other necessary modules
import React, { useEffect, useState } from 'react';
import './Floating.css';
import 'tailwindcss/tailwind.css';

// JSX elements for bubbles (replace with your actual JSX elements)
const bubbleJSX = [
    // istimg
    <div className="" key={1}>
  <div className=" relative h-full  blink ">
    <div className=" rounded-full bg-gradient-to-r from-[#6b21a8] via-[#e11d48] to-[#a21caf] p-[7px]">
    
        <img src="/bubble1.png" alt="" className='bubble-content rounded-full border-[2px] border-white'/> 
  </div>
 
<img src="/twitter.png" alt=""  className='md:w-[50px] md:h-[50px]  w-[25px] h-[25px] absolute right-[-20px] bottom-1'/>
  </div></div>,

//   2nd img 
  <div className="bubble-content relative" key={2}>
    <img src="/bubble2.png" alt="" />
    <img src="/twitter.png" alt=""  className='md:w-[50px] md:h-[50px]  w-[25px] h-[25px] absolute right-[-20px] bottom-1'/>
   
  </div>,
//   3rd img
  
  <div className="bubble-content relative" key={3}>
       <div className="h-full w-full rounded-full bg-gradient-to-r from-[#6b21a8] via-[#e11d48] to-[#a21caf] p-[7px]">
        <img src="/bubble3.png" alt="" className='bubble-content rounded-full border-[2px]'/> 
  </div>
    <img src="/twitter.png" alt=""  className='md:w-[50px] md:h-[50px]  w-[25px] h-[25px] absolute right-[-20px] bottom-1'/>
   
  </div>,
//   4th img 
  <div className="bubble-content relative" key={4}>
    <img src="/bubble4.png" alt="" />
    <img src="/twitter.png" alt=""  className='md:w-[50px] md:h-[50px]  w-[25px] h-[25px] absolute right-[-20px] bottom-1'/>
   
  </div>,
//   5th img 
  <div className="bubble-content relative" key={5}>
    <img src="/bubble5.png" alt="" />
    <img src="/twitter.png" alt=""  className='md:w-[50px] md:h-[50px]  w-[25px] h-[25px] absolute right-[-20px] bottom-1'/>
   
  </div>,
//   6th img 
  <div className="bubble-content relative" key={6}>
    <img src="/bubble6.png" alt="" />
    <img src="/twitter.png" alt=""  className='md:w-[50px] md:h-[50px]  w-[25px] h-[25px] absolute right-[-20px] bottom-1'/>
   
  </div>,
 
];

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const initialBubbles = bubbleJSX.map((element, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() + 0.5,
      element,
    }));

    setBubbles(initialBubbles);
  }, []);

  const updateBubbles = () => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) => {
        const newY = bubble.y - bubble.speed;
        const repositionY = newY < -40 ? window.innerHeight : newY;
 

        return {
          ...bubble,
          y: repositionY,
       
        };
      })
    );
  };

  useEffect(() => {
    const animationFrame = requestAnimationFrame(function update() {
      updateBubbles();
      requestAnimationFrame(update);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="floating-bubbles">
    {bubbles.map((bubble) => {
    
      return (
        <div
          key={bubble.id}
          className={`bubble md:w-[90px] md:h-[90px] w-[60px] h-[60px] move ${bubble.element.key===0?'border-[20px] border-black hidden':''}` }
          style={{
            left: bubble.x,
            top: bubble.y,
          }}
        >
          {bubble.element}
        </div>
      );
    })}
  </div>
  
  );
};

export default FloatingBubbles;
