import React from 'react'
import LearningDropDown from './LeanringDropDown'
import DepartmentDropDown from './DepartmentDropDown'
import TopRightSec from './TopRightSec'
import LogoSection from './LogoSection'

function TopBar() {
  return (
    <>
    <div className='bg-blue-900 h-32 flex justify-evenly items-center w-full'>
        <div> <LogoSection /> </div>
        <div className='ml-10 flex gap-x-20'>
            <div>
                <LearningDropDown />
            </div>
            <div>
                <DepartmentDropDown />
            </div>
        </div>
        <div><TopRightSec /></div>
    </div>
    </>
  )
}

export default TopBar