import React from 'react'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'
import { Sidebar } from '@/Components/Sidebar'
import { AdminDashboardTabsList } from './Partials/dashboard'

function MainLayout({children}) {
  return (
    <div>
      <header>
        <Navbar/>
      </header>

<Sidebar lists={AdminDashboardTabsList}/>

        {children}



     {/* footer */}
        <Footer/>
      {/* footer */}
    </div>
  )
}

export default MainLayout
