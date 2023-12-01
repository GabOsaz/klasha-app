import arrayOfLength from '@/utils/arrayOfLength';
import faker from 'faker';

const salesSummaryData = [
  {
    id: 1,
    duration: '',
    cardTheme: 'light',
    amount: '₦1,652.50',
    dateRange: 'Today\'s sales',
    data: null,
    theme: 'light',
    chart: false,
  },
  {
    id: 2,
    duration: 'This Week',
    cardTheme: 'dark',
    amount: '₦1,652.50',
    dateRange: '24 Aug - 01 Sep 21',
    chart: true,
    data: arrayOfLength(7).map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
  {
    id: 3,
    duration: 'This Month',
    cardTheme: 'light',
    amount: '₦1,652.50',
    dateRange: '24 Aug - 01 Sep 21',
    chart: true,
    data: arrayOfLength(7).map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
  {
    id: 4,
    duration: 'Last Month',
    cardTheme: 'light',
    amount: '₦1,652.50',
    dateRange: '24 Aug - 01 Sep 21',
    chart: true,
    data: arrayOfLength(7).map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
];

export default salesSummaryData;
