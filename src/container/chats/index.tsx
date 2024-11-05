import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { chartData } from '../../utils/constants';
import Checkbox from '../../components/Checkbox';
import { candleService } from '../../utils/services/candleService';

const ChartIcon = React.lazy(() => import('../../components/ChartIcon'))
const TimeFrames = React.lazy(() => import('../../components/TimeFrames'))

const Chats: React.FC = () => {
  const [timeRange, setSelectedRange] = useState<string>('1h');
  const [series, setSeries] = useState<ApexAxisChartSeries>([{
    data: []
  }]);


  useEffect(() => {
    handleRenderChart()
  }, [timeRange]);

  const handleRenderChart = async () => {
    try {
      const data = await candleService(timeRange);
      if (data instanceof Error) {
        throw new Error(data.message);
      }
      setSeries([{ data, group: "apexcharts-axis-0" }]);
    } catch (error) {
      console.error(error);
    }
  }

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
              <Chart
                options={chartData}
                series={series}
                type="candlestick"
                height={350}
              />
            </div>
          </div>
        </div>

        <TimeFrames selectedRange={timeRange} setSelectedRange={setSelectedRange} />
      </div>
    </div>

  )
}

export default Chats