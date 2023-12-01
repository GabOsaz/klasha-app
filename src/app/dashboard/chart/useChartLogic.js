/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/extensions */
import getRandomNumber from '@/utils/getRandomNumber';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.3,
      borderWidth: 1.0,
    },
    point: { radius: 1 },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: true,
        beginAtZero: true,
      },
    },
    y: {
      grid: {
        display: true,
      },
      border: {
        display: false,
      },
      ticks: {
        display: true,
        beginAtZero: true,
      },
    },
  },
};

const useChartLogic = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

  const labels = ['20 Aug', '21 Aug', '22 Aug', '23 Aug', '24 Aug', '25 Aug'];
  const fakeData = labels.map(() => getRandomNumber(1000, 4000));

  const data = () => ({
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: fakeData,
        borderColor: '#EF2C5A',
        backgroundColor: (context) => {
          const { ctx } = context.chart;
          const gradient = ctx.createLinearGradient(0, -200, 0, 200);
          gradient.addColorStop(1, '#EF2C5A00');
          gradient.addColorStop(0, '#EF2C5A');
          return gradient;
        },
      },
    ],
  });
  return {
    options, data,
  };
};

export default useChartLogic;
