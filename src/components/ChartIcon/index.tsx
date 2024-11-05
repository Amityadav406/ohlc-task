import React from 'react'
import { BrushIcone, CrossIcon, FiboIcone, PatternIcone, ProjectIcone, SmileIcone, TextIcone, TreadLineIcon } from '../../utils/icons';


const ChartIcon = () => {
    return (
        <div className=" left-0  top-0 bottom-0  bg-[#172d3e] flex flex-col items-center space-y-4 p-3"
        
        >
            <span className='charts-icon text-gray-500 cursor-pointer hover:text-white'>
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
    )
}
export default ChartIcon
