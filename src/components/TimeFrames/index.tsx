import React from 'react'

 const TimeFrames = () => {
  return (
    <div className="flex justify-between pl-12 py-5 ">
    <div className="flex gap-3 text-sm">
      <span className='cursor-pointer hover:text-white'>3y</span>
      <span className='cursor-pointer hover:text-white'>1y</span>
      <span className='cursor-pointer hover:text-white'>3m</span>
      <span className='cursor-pointer hover:text-white'>1m</span>
      <span className='cursor-pointer hover:text-white'>7d</span>
      <span className='cursor-pointer hover:text-white'>6h</span>
      <span className='cursor-pointer hover:text-white'>1h</span>
    </div>
    <div className="text-sm pr-5"> 00:00:00(UTC)</div>
  </div>
  )
}
export default TimeFrames
