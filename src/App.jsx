import React from 'react'
import Sidebar from './components/sidebar'
import HeaderComponent from './components/HeaderComponent'
import MainDashBoard from './components/MainDashBoard'

const App = () => {
  return (
    <div className=' flex font-[Inter]'>
      <div >
        <Sidebar />
      </div>
      <div className='w-full h-full'>
        <HeaderComponent />
        <MainDashBoard/>
      </div>
    </div>
  )
}

export default App