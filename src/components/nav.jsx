import React from  'react'

function Nav() {
    return (
            <div
        id="NAV"
        className="bg-[rgba(52,_255,_85,_0.1)] flex items-center justify-between px-10 w-full h-24 md:gap-8"
      >
        <div className="text-4xl font-medium text-[#75ff52]">
          ELEVATE GOLF FITTING
        </div>
        <div className='flex items-center col-row gap-12'>
          <div className="text-3xl text-[#75ff52]">
            HOME
          </div>
          <div className="text-3xl text-[#75ff52]">
            ABOUT US
          </div>
        <button
            id="Button1"
            className="text-2xl text-[#75ff52] border border-[#75ff52] flex justify-center items-center py-2 px-4 md:py-3 md:px-6 w-full md:w-auto cursor-pointer  transition-all ease-in-out duration-300 hover:bg-[#75ff52] hover:text-[#17152b] rounded-full" 
          >
            SIGN UP NOW
          </button>
          <button
            id="Button2"
            className="text-2xl text-[#17152b] bg-[#75ff52] flex justify-center items-center py-2 px-4 md:py-3 md:px-6 w-full md:w-auto cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#75ff52] rounded-full"
          >
            LOG IN
          </button>
          </div>
        </div>
    )
}

export default Nav