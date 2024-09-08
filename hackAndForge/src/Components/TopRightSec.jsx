import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function TopRightSec() {
    const [loggedIn, setloggedIn] = useState(false)
    const vald = useSelector((state) => state.logintruf) // Take refs here
    
    useEffect(() => {
      setloggedIn(vald)
    }, [])
    
  return (
    <>
        <div className="bg-blue-500 text-white font-semibold w-36 rounded-lg h-10 text-center pt-2 cursor-pointer">
            {(loggedIn) ? <h1>Hey me</h1> : <Link to='/user/login'><h1>Login</h1></Link>}
        </div>
    </>
  )
}

export default TopRightSec