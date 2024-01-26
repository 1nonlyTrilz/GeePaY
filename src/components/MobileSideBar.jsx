import React from 'react'
import box from './images/box.png'
import category from './images/category.png'
import discount from './images/discount-shape.png'
import info from './images/info-circle.png'
import moon from './images/moon.png'
import profile from './images/profile.png'
import trend from './images/trend-up.png'
import bell from './images/solar_bell-outline.png'
import vector from './images/Vector.png'
import sun from './images/sun.png'
import arrowright from './images/arrow-right.png'
import setting from './images/setting-2.png'
import { IoClose } from "react-icons/io5";
import logout from './images/logout.png'
const imageList = [
    trend,
    profile,
    box,
    discount,
    info,
]
const logoutList = [
    arrowright,
    setting,
    logout,
]
const MobileSideBar = ({onClick}) => {
    return (
        <div className='sidebarmobile justify-between h-dvh top-0 relative '>
            <button className='absolute top-0 right-0 text-2xl p-1 text-neutral-400' onClick={onClick}>
                <IoClose />
            </button>
            <div className='flex flex-col gap-[6px] items-center'>
                <button className='p-[16px] relative  rounded-full  flex justify-center mb-2'>
                                    <img className='w-[24px] h-[24px] group-hover:brightness-75' src={bell} alt={`Image`} />
                                </button>
                <button className='p-[16px] relative hover:scale-125 active:scale-150 duration-150 group rounded-full  flex justify-center selected-button-mobile '>
                                    <img className='w-[20px] h-[20px] group-hover:brightness-75' src={category} alt={`Image`} />
                                </button>
                {
                    imageList.map((item, index) => {
                        return (
                            <>
                                <button className='p-[16px] hover:scale-125 active:scale-150 duration-150 group rounded-full  flex justify-center '>
                                    <img className='w-[20px] h-[20px] group-hover:brightness-75 ' src={item} alt={`Image ${index} `} />
                                </button>
                            </>
                        )
                    })
                }
                <div className='flex items-center flex-col gap-[16px] p-[8px] bg-[#FFF] rounded-[100px]' >
                    <button className=''>
                        <img src={sun} alt={`Image `} />
                    </button>
                    <button className='group'>
                        <img src={moon} alt={`Image `} className='group-hover:brightness-75 duration-150' />
                    </button>
                </div>
            </div>
            <div className='flex items-center flex-col gap-[10px] p-[10px] mb-16'>
                {
                    logoutList.map((item, index) => {
                        return (
                            <button className='p-[10px] hover:scale-125 active:scale-150 duration-150 group rounded-full '>
                                <img className='w-[24px] h-[24px] group-hover:brightness-75' src={item} alt={`Image ${index}`} />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MobileSideBar