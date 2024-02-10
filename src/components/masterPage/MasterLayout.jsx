import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import ImageBox from '../imgBox/ImageBox'

export default function MasterLayout() {
  return (
    <>
    <Navbar/> 
    <Outlet/>
    <Footer/>
    </>
  )
}
