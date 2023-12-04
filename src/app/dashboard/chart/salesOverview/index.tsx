/* eslint-disable max-len */

'use client';

import { Line } from 'react-chartjs-2';
import salesSummaryData from '@/app/mockData/salesSummaryData';
import salesSummaryT from '@/app/types/salesSummaryType';
import useSalesSummaryChartLogic from './useSalesSummaryChartLogic';

function Card({ info }: salesSummaryT) {
  const {
    duration, amount, chart, dateRange, cardTheme, data: fakeData,
  } = info;
  const { options, data } = useSalesSummaryChartLogic(fakeData);
  const darkThemeTextColor = cardTheme === 'dark' ? 'text-white' : 'text-shades-black-400';

  return (
    <div
      className={
        `${cardTheme === 'dark' ? 'bg-black text-white' : 'bg-white'}
          h-60 border border-black rounded-lg p-6`
        }
    >
      {dateRange && <h3 className={`text-sm font-normal ${darkThemeTextColor}`}>{dateRange}</h3>}
      {chart
        && (
          <div className="h-[78px] md:h-[78px] mt-4">
            <Line options={options} data={data()} />
          </div>
        )}
      <h3 className={`text-sm mt-4 font-normal ${darkThemeTextColor}`}>{duration}</h3>
      <h3 className="font-medium text-xl mt-[5px]">{amount}</h3>

    </div>
  );
}

function SalesOverview() {
  return (
    <div className="justify-center lg:justify-between grid grid-cols-1 md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {salesSummaryData.map((datum) => (
        <Card key={datum.id} info={datum} />
      ))}
    </div>
  );
}

export default SalesOverview;
