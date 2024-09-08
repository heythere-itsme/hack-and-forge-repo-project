import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Institutelogo.png'

function LogoSection() {
  return (
    <>
        <Link to='/'>
            <div >
                <img src={logo} alt="" className='w-20'/>
            </div>
        </Link>
    </>
  )
}

export default LogoSection