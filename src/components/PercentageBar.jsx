import React from 'react'


const PercentageBar = ({title,price,percentage,color,width}) => {
    return (
        <div className='flex flex-col percentbar gap-[16px]'>
            <h3>{title}</h3>
            <div className='outward w-full overflow-hidden'>
                <div className={`  h-full rounded-[40px]`} style={{width:width,backgroundColor:color}}>

                </div>
            </div>
            <div className='flex justify-between'>
                <p>{price}</p>
                <p>{percentage}</p>
            </div>
        </div>
    )
}

export default PercentageBar