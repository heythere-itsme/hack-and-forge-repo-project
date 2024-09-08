import React from 'react'
import { Link } from 'react-router-dom'

function LearnHome({name}) {
  return (
    <>
    <Link to={name}>
    <div className='bg-blue-800 w-80 h-80 rounded-2xl flex justify-center items-center'>
        <h1 className='font-bold text-white text-6xl hover:text-green-600'>{name}</h1>
    </div>
    </Link>
    </>
  )
}

export default LearnHome