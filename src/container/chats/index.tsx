import React, { useEffect } from 'react'
import ApexCharts from 'apexcharts'
import { data } from '../../utils/constants';
import Checkbox from '../../components/Checkbox';

const ChartIcon = React.lazy(() => import('../../components/ChartIcon'))
const TimeFrames = React.lazy(() => import('../../components/TimeFrames'))

const Chats = () => {

  useEffect(() => {
    var chart = new ApexCharts(document.getElementById('chart'), data.options)
    chart.render()
  }, []);


  return (
    <div className='w-full px-5 py-10'>
      <div className="flex w-full flex-col text-gray-500 bg-[#172d3e]">
        <div className="bg-[#0e1a2b] font-sans flex flex-col">
          <div className="flex justify-between items-center p-3 bg-[#172d3e]">
            <div className=" text-white text-sm">CHART BTC/USD</div>
            <div className="flex items-center space-x-3">
              <Checkbox title='SHOW TRADES' />
              <Checkbox title='SHOW LIQUIDATIONS' checked={true} />
            </div>
          </div>

          <div className=" flex">
            <ChartIcon />
            <div id='chart' className="bg-[#172d3e] flex-1 w-full">
            </div>
          </div>
        </div>

        <TimeFrames />
      </div>
    </div>

  )
}

export default Chats