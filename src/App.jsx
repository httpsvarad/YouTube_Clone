import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


const App = () => {



  return (
    <div className='h-screen'>
      <Navbar />
      <Sidebar/>
    </div>
  )
}

export default App