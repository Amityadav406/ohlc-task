import React from 'react'
import { BrushIcone, CrossIcon, FiboIcone, PatternIcone, ProjectIcone, SmileIcone, TextIcone, TreadLineIcon } from '../../utils/icons';


const Chats = () => {

  return (
    <div className='w-full flex justify-end px-5 py-10'>
      <div className="flex w-full max-w-[75%] flex-col h-[500px] inset-y-0 text-gray-500 bg-[#172d3e]">
        <div className="bg-[#0e1a2b] text-white font-sans h-screen flex flex-col">
          <div className="flex justify-between items-center p-3 bg-[#1b2b3a]">
            <div className="text-sm">CHART BTC/USD</div>
            <div className="flex items-center space-x-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="show-trades"
                  className="mr-2"
                />
                SHOW TRADES
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="show-liquidations"
                  defaultChecked
                  className="mr-2"
                />
                SHOW LIQUIDATIONS
              </label>
            </div>
          </div>

          {/* Main Chart Content */}
          <div className="flex-grow relative flex">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#1b2b3a] flex flex-col items-center space-y-4 py-3">
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {CrossIcon()}
              </span>
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {TreadLineIcon()}
              </span>
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {FiboIcone()}
              </span>
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {PatternIcone()}
              </span>
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {ProjectIcone()}
              </span>
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {BrushIcone()}
              </span>
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {TextIcone()}
              </span>
              <span className='text-gray-500 cursor-pointer hover:text-white'>
                {SmileIcone()}
              </span>
              
          
            </div>
            <div className="flex-grow bg-[#0e1a2b] border border-[#1b2b3a] flex justify-center items-center">
              <div className=''>
                
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-between pl-12 p-2 ">
          <div className="flex gap-3 text-sm">
            <span className='cursor-pointer hover:text-white '>3y</span>
            <span className='cursor-pointer hover:text-white '>1y</span>
            <span className='cursor-pointer hover:text-white '>3m</span>
            <span className='cursor-pointer hover:text-white '>1m</span>
            <span className='cursor-pointer hover:text-white '>7d</span>
            <span className='cursor-pointer hover:text-white '>6h</span>
            <span className='cursor-pointer hover:text-white '>1h</span>
          </div>
          <div className="text-sm"> 00:00:00(UTC)</div>
        </div>

      </div>
    </div>

  )
}

export default Chats