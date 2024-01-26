import React from 'react'
import PercentageBar from './PercentageBar'


const dataList = [
    {
        "title": "Book Bazaar",
        "width": '60%',
        "price": '$2,500,000',
        "percentage": '+15%',
        "color": '#6160DC'
    },
    {
        "title": "Artisan Aisle",
        "width": '40%',
        "price": "$1,800,000",
        "percentage": '+10%',
        "color": '#54C5EB'
    },
    {
        "title": "Toy Troop",
        "width": '32%',
        "price": "$1,200,000",
        "percentage": "+8%",
        "color": '#FFB74A'
    },
    {
        "title": "Product Name",
        "width": '24%',
        "price": "$800,000",
        "percentage": '+6%',
        "color": '#FF4A55'
    },

]


const TopPlatform = () => {
    return (
        <div className='topplatform col-span-2 max-md:col-span-0 flex flex-col gap-[20px] p-[16px] pl-[20px] pb-[32px] border border-[#EDF2F7]'>
            <div className='flex justify-between items-center'>
                <h3>
                    Top Platform
                </h3>
                <button>
                    See All
                </button>
            </div>
            <div className=' flex flex-col gap-[16px]'>
                {
                    dataList.map((item) => {
                        return (
                            <PercentageBar price={item.price} title={item.title} percentage={item.percentage} color={item.color} width={item.width} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopPlatform