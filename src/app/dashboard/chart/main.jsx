/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

'use client';

import { Line } from 'react-chartjs-2';
import Button from '@/components/button';
import DownArrow from '@/assets/dashboard/DownArrow';
import CTACardPattern from '@/assets/dashboard/CTACardPattern';
import Chevron from '@/assets/navbarIcons/Chevron';
import useChartLogic from './useChartLogic';

function ChartHeading() {
  return (
    <div className="flex space-x-3 items-center justify-between font-medium">
      <span className="text-lg font-medium">Sales</span>
      <span className="text-shades-black-400">|</span>
      <span className="text-primary-pink-500 text-sm">7 days</span>
      <span className="text-sm">30 days</span>
      <Button rightIcon={<Chevron w="18" />} text="USD" className="border rounded-md justify-between font-medium py-2 border-black" />
      <Button rightIcon={<Chevron w="18" />} text="email" className="border rounded-lg justify-between font-medium w-[280px] py-2 border-black" />
      <Button leftIcon={<DownArrow />} text="Download report" className="border rounded-lg border-black font-medium py-3" />
    </div>
  );
}

export default function AreaChart() {
  const { options, data } = useChartLogic();

  return (
    <div className="w-full mt-12">
      <div className="w-full md:w-[70%] mr-6">
        <ChartHeading />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4 space-x-0 md:space-x-6">
        <div className="w-full md:w-[70%]">
          <div className="flex justify-between w-full">
            <div className="h-[27rem] md:h-[16rem] w-full border border-black rounded-lg px-8 py-10">
              <Line options={options} data={data()} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%] bg-primary-pink-500 rounded-lg relative p-6">
          <p className="w-3/4 text-lg text-white">KlashaWire - send money to businesses globally from Africa</p>
          <div className="absolute bottom-6 left-6 z-10">
            <Button text="Send a Wire" className="bg-black rounded-lg px-6 py-3 text-white text-sm" />
          </div>
          <div className="absolute top-0 left-0">
            <CTACardPattern />
          </div>
        </div>

      </div>
    </div>
  );
}
