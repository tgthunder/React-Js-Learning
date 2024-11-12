import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// What we want - The header and footer part should be fixed and only content should be changed 
// we can achive this using outlet 
function Layout() {
  return (
    <>
    <Header/>  
    {/* Header fixed */}
    <Outlet/>
    {/* outlet dynamic */}
    <Footer/>
    {/* footer is fixed */}
    </>
  )
}

export default Layout