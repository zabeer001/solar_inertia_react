import React from 'react'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'
import Sidebar from './Partials/Sidebar'

function BackendLayout({children}) {
  return (
    <div>
    
        <Navbar/>
    
      <Sidebar/>

 
        {children}
      


     {/* footer */}
        <Footer/>
      {/* footer */}
    </div>
  )
}

export default BackendLayout
