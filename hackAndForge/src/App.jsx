import React from 'react'
import TopBar from './Components/TopBar'
import { Outlet } from 'react-router-dom'


function HomePageLayout() {
  return (
    <>
    <TopBar />
    <Outlet />
    </>
  )
}

export default HomePageLayout