import React from 'react'

const Landingpage = () => {
  return (
 <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat"  
 style={{ backgroundImage: "url('/Landingpage.jpg')" }} > 
        <div className=" absolute inset-0 flex flex-col items-start justify-center text-white px-12 text-left top-10 left-10">
          <div className="items-start text-4xl md:text-5xl drop-shadow-lg mb-65 ml-18">
            GMP 2 GLED MOUSE PAD
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-1 drop-shadow absolute inset-y-60 left-30">
            Glow Up Your Game
          </h2>
          <p className="text-lg md:text-l max-w-l mb-6 drop-shadow-sm text-left absolute inset-y-70 left-30">
            NOW AVAILABLE IN THE US! 2-zone RGB Lighting. Zero-edge irritation. <br />
            And the best part? This mouse pad's surface is smoother than your aim on a good day.
          </p>
          <button className="rounded-full w-[200px] bg-white px-9 py-4 text-black items-start font-semibold hover:bg-white transition shadow-lg ml-20 mb-20 ">
            Shop Now
          </button>
        </div>
      </div>
      
    )
}

export default Landingpage