import React from 'react'
import { IoMdLock } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Attendance = () => {
  return (
        <div className="flex h-screen gap-y-2 justify-center flex-col items-center">
          <div>
            <IoMdLock color="#6850a3" size={200} />
          </div>
          <div className='text-3xl'>
             Coming Soon
          </div>
          <div className='mt-3 mb-5 text-gray-400'>
            We are working hard to bring you something amazing. Stay tuned!
          </div>
          <div>
            <Link to="/home" className='bg-[#6850a3] text-white p-2 rounded-xl'>Back Home</Link>
          </div>
        </div>
  )
}

export default Attendance