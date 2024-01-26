import React from 'react'

import greenarrow from './MainImages/greenarrow.png'

import redarrow from './MainImages/redarrow.png'

const AnalyticsCard = ({image,color,title,chart,percentage,amount}) => {
  return (
    <div className='rounded-[14px] border border-[#EDF2F7] p-[16px] flex flex-col gap-[10px] bg-white'>
        <div className='flex justify-between items-center'>
            <div className='p-[10px] border rounded-full'><img src={image} alt="" /></div>
            <div><img src={chart} alt="" /></div>
        </div>
        <div className='flex flex-col gap-[5px]'>
            <p className='card-title'>{title}</p>
            <p className='card-amount'>{amount}</p>
        </div>
        <div className={`flex gap-[10px] justify-between `}>
            <div className={`flex items-center gap-[4px] ${color === 'green'? 'green-percent' : color === 'red'?'red-percent':''}`}>
                <img src={color === 'green'? greenarrow : color === 'red'?redarrow:''} alt="" className='w-[9px] h-[5px]' />
                <p className='card-percent'>{percentage}%</p>
            </div>
            <div>
                <p className='previous'>vs. previous month</p>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsCard