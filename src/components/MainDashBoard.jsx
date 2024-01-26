import React from 'react'
import AnalyticsGraphSection from './AnalyticsGraphSection'
import OrdersSection from './OrdersSection'
import AnalyticsGrid from './AnalyticsGrid'
import TopPlatform from './TopPlatform'

const MainDashBoard = () => {
  return (
    <div className='flex maindashboard  '>
        <div className='w-3/5 max-xl:w-full h-fit flex flex-col gap-8 max-xl:py-6 max-xl:pb-32'>
            <AnalyticsGrid />
            <AnalyticsGraphSection />
            <div className='xl:hidden px-4'>
              <TopPlatform/>
            </div>
        </div>
        <div className='w-2/5 max-xl:hidden'>
            <OrdersSection/>
        </div>
    </div>
  )
}

export default MainDashBoard