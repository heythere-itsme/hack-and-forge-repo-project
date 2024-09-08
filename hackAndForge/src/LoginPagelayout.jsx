import React from 'react'
import LogoSection from './Components/LogoSection'
import { Outlet } from 'react-router-dom'

function LoginPagelayout() {
  return (
    <>
    <div>
      <div className='w-fit'>
    <LogoSection />
    </div>
    <Outlet />
    </div>
    
    </>
  )
}

export default LoginPagelayout