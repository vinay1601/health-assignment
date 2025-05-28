import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='w-full h-16 pt-1'>
                <div className='flex w-full h-16 items-center max-w-[1480px] justify-between mx-auto gap-4 px-4'>
                    <div className='flex md:hidden items-center'>
                        <h2 className='font-bold text-3xl text-[#00C4CC]'>Health<span className='text-[#273B7A]'>care.</span></h2>
                    </div>
                    <div className='w-full h-full flex justify-end items-center'>
                        <div className=' justify-start w-full ml-2.5 hidden md:flex'>
                            <div className="flex items-center bg-white  rounded-lg px-3 py-2 shadow-sm w-full max-w-lg">
                                <FiSearch className="text-gray-500 text-lg mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
                                />
                                <div className="ml-3 relative">
                                    <button className="text-gray-600 hover:text-indigo-600 transition-all duration-200">
                                        <IoNotificationsOutline className="text-2xl" />
                                    </button>
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                        3
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='w-fit h-full'>
                            <div className="p-1.5 flex justify-end">
                                <div className='flex justify-evenly  w-full'>
                                    <button className="flex mx-2.5 items-center gap-2 px-4 py-2 bg-[#00C4CC] text-white font-semibold rounded-full shadow-md hover:bg-[#059ba1] transition-all duration-200">
                                        <FaUserCircle className="text-2xl" />
                                        <span>Demo</span>
                                    </button>
                                    <button className="flex items-center mx-2.5 pb-0.5 justify-center w-9 h-9 bg-[#2F80ED] text-white text-xl font-bold rounded-md shadow-md hover:bg-[#1c6dd0] transition-all duration-200">
                                        +
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
