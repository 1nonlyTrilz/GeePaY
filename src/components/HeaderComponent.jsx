import React, { useState } from 'react'
import search from './images/searchicon.svg'
import calender from './images/calender-icon.svg'
import bell from './images/bellicon.svg'
import profile from './images/profile-user.png'
import down from './images/arrowdown.svg'
import vector from './images/Vector.png'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import MobileSideBar from './MobileSideBar'
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion'
const HeaderComponent = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    const Sidebar = () => {
        return (
            <div className='fixed top-0 left-0  w-full '>
                <AnimatePresence>
                {
                    isSideBarOpen && (
                        <motion.div key="sss" className='flex justify-between'>
                            <motion.div key={'asdas'} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=' bg-black w-full flex justify-end bg-opacity-75'>
                                <motion.div onClick={() => { setIsSideBarOpen(false) }} className='w-full'>

                                </motion.div>
                                <motion.div key={'sadasd'} initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: "100%" }}  className=''>
                                    <MobileSideBar onClick={() => { setIsSideBarOpen(false) }} />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                }
                    </AnimatePresence>
            </div>
        )
    }
    return (
        <div className='header w-full sticky top-0 max-md:py-[14px]'>
            <div className='flex items-center justify-between gap-[20px] '>
                <div className='flex justify-between items-center w-3/5 max-xl:w-1/2 max-lg:w-auto'>
                    <div>
                        <p className='dashboard-title max-md:hidden'>Dashboard</p>
                        <img src={vector} className='md:hidden' alt="" />
                    </div>

                    <div className=' bg-white w-[333px]  flex items-center max-lg:hidden'>
                        <button className='pl-[13px] pr-[6px] h-[48px] border border-[#dadddd] border-r-0 bg-white  rounded-tl-[24px] rounded-bl-[24px] '>
                            <img src={search} alt="" className='w-[18px] h-[18px] ' />
                        </button>
                        <input type="text" placeholder='Search...' className='font-[Inter] w-full outline-none border-l-0 border border-[#dadddd] bg-white rounded-br-[24px]  rounded-tr-[24px] h-[48px]' />
                    </div>
                </div>
                <div className='flex items-center justify-end w-2/5 gap-[20px] max-xl:w-1/2 max-lg:w-auto '>
                    <div className='flex gap-[10px] px-[16px] max-md:hidden'>
                        <img src={calender} alt="" className='w-[20px] h-[20px]' />
                        <p className='date'>{formattedDate}</p>
                    </div>
                    <div className="w-10 h-10 p-[11px] rounded-[27px] border border-zinc-300 justify-center items-center  flex max-md:hidden">
                        <img src={bell} alt="" />
                    </div>
                    <div className='flex rounded-[28px] border py-[6px] px-[8px] border-[#dadddd]  items-center gap-[12px] max-md:hidden'>
                        <div>
                            <img src={profile} alt="" className='w-[38px] h-[38px]' />
                        </div>
                        <div className='flex items-center'>
                            <div className='flex flex-col text-right'>
                                <p className='user-name'>Justin Bergson</p>
                                <p className='user-email'>Justin@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <img src={down} alt="" className='w-[20px] h-[20px]' />
                        </div>
                    </div>
                    <div className='md:hidden flex gap-[10px] items-center'>
                        <img src={profile} className='w-[38px] h-[38px]' alt="" />
                        <button className='p-[8px]' onClick={() => { setIsSideBarOpen(true) }}>
                            <HiOutlineMenuAlt4 className='text-2xl' />
                        </button>
                    </div>
                </div>
                <Sidebar/>
            </div>
        </div>
    )
}



export default HeaderComponent