import React from 'react'
import ModuleLearn from './ModuleLearn'
import { useSelector } from 'react-redux'

function LearnPageD() {
  // const Learn = useSelector((state) => state.perfs.Learn)
  // const Depart = useSelector((state) => state.perfs.Department)
  return (
    <>
    <div className='mt-20 ml-10 flex flex-col gap-y-5 mb-20'>
        <ModuleLearn name={'Module-I'} content={'lorem ipem'} />
        <ModuleLearn name={'Module-II'} content={'lorem ipem'} />
        <ModuleLearn name={'Module-III'} content={'lorem ipem'} />
        <ModuleLearn name={'Module-IV'} content={'lorem ipem'} />
        <ModuleLearn name={'Module-V'} content={'lorem ipem'} />
    </div>
    
    </>
  )
}

export default LearnPageD