// 'use client'

import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5'

export const Sidebar = () => {
  return (
    <div>

      {/* Background black */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      {/* Background blur */}
      <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>

      {/* Sidemenu */}
      <nav
        className={`fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300`}
      >
        <IoCloseOutline 
          size={50} 
          className="absolute top-5 right-5 cursor-pointer" 
          // onClick={() => console.log('click')}
        />

        <div className="relative mt-14">
          <IoSearchOutline 
            size={20}
            className="absolute top-2 left-2"
          />
        </div>
      </nav>

    </div>
  )
}
