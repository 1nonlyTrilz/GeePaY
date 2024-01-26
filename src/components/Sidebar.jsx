import React from 'react'
import box from './images/box.png'
import category from './images/category.png'
import discount from './images/discount-shape.png'
import info from './images/info-circle.png'
import moon from './images/moon.png'
import profile from './images/profile.png'
import trend from './images/trend-up.png'
import vector from './images/Vector.png'
import sun from './images/sun.png'
import arrowright from './images/arrow-right.png'
import setting from './images/setting-2.png'
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
const Sidebar = () => {
    return (
        <div className='sidebar justify-between h-dvh sticky top-0 max-md:hidden'>
            <div className='flex flex-col gap-[10px] items-center'>
                <button className='p-[10px]'>
                    <img src={vector} alt={`Image `} className='w-[40px] h-[40px]' />
                </button>
                <button className='p-[10px] relative active:scale-150   rounded-full w-full flex justify-center selected-button '>
                                    <img className='w-[24px] h-[24px]' src={category} alt={`Image`} />
                                </button>
                {
                    imageList.map((item, index) => {
                        return (
                            <>
                                <button className='p-[10px] active:scale-150 hover:scale-125 duration-150 group rounded-full w-full flex justify-center '>
                                    <img className='w-[24px] h-[24px] group-hover:brightness-75' src={item} alt={`Image ${index}`} />
                                </button>
                            </>
                        )
                    })
                }
                <div className='flex items-center flex-col gap-[16px] p-[10px] bg-[#FFF] rounded-[100px]' >
                    <button className=''>
                        <img src={sun} alt={`Image `} />
                    </button>
                    <button className='group'>
                        <img src={moon} className='group-hover:brightness-75' alt={`Image `} />
                    </button>
                </div>
            </div>
            <div className='flex items-center flex-col gap-[10px] p-[10px] mb-16'>
                {
                    logoutList.map((item, index) => {
                        return (
                            <button className='p-[10px] hover:scale-125 duration-150 group active:scale-150 rounded-full '>
                                <img className='w-[24px] h-[24px] group-hover:brightness-75' src={item} alt={`Image ${index}`} />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar