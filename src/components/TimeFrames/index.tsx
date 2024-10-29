import React from 'react'
import { timeRange } from '../../utils/constants';


interface TimeFramesProps {
    selectedRange: string;
    setSelectedRange: (val: string) => void;
    [rest: string]: any;
}


const TimeFrames = ({ selectedRange, setSelectedRange }: TimeFramesProps) => {
    return (
        <div className="flex justify-between pl-12 py-5 ">
            <div className="flex gap-3 text-sm">
                {timeRange.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedRange(item)} className={`cursor-pointer hover:shadow-lg hover:text-white ${item === selectedRange && 'text-white'}`}>{item}</button>

                ))}

            </div>
            <div className="text-sm pr-5"> 00:00:00(UTC)</div>
        </div>
    )
}
export default TimeFrames
