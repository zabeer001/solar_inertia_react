import React from 'react'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'
import { Sidebar } from '@/Components/Sidebar'

function MainLayout({children}) {
  return (
    <div>
      <header>
        <Navbar/>
      </header>

<Sidebar />

        {children}



     {/* footer */}
        <Footer/>
      {/* footer */}
    </div>
  )
}

export default MainLayout
