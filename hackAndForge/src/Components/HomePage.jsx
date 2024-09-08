import React from 'react'
import { Link } from 'react-router-dom'
import LearnHome from './LearnHome'

function HomePage() {
  return (
    <>
    <div className='flex gap-20 justify-evenly mt-20 w-screen'>
    <div>
    <LearnHome name={"Learn"}/>
    </div>
    <div>
    <LearnHome name={"Practice"}/>
    </div>
    <div>
    <LearnHome name={"Support"}/>
    </div>
    </div>
    </>
  )
}

export default HomePage