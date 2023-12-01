import Dashboard from '../../assets/sidebarSvgIcons/Dashboard';
import Balances from '../../assets/sidebarSvgIcons/Balances';
import Transactions from '../../assets/sidebarSvgIcons/Transactions';
import routeMap from '../../utils/routeMap';

const routes = [
  {
    groupTitle: 'Main pages',
    pages: [
      {
        icon: <Dashboard route={routeMap.dashboard} />,
        pageName: 'Dashboard',
        to: routeMap.dashboard,
      },
      {
        icon: <Balances route={routeMap.balances} />,
        pageName: 'Balances',
        to: routeMap.balances,
      },
      {
        icon: <Transactions route={routeMap.transactions} />,
        pageName: 'Transactions',
        to: routeMap.transactions,
      },
      {
        icon: <Dashboard />,
        pageName: 'Analytics',
        to: routeMap.dashboard,
      },
      {
        icon: <Dashboard />,
        pageName: 'Marketing',
        to: routeMap.dashboard,
      },
      {
        icon: <Dashboard />,
        pageName: 'Exchange Rates',
        to: routeMap.dashboard,
      },
    ],
  },
  {
    groupTitle: 'Accept payments',
    pages: [
      {
        icon: <Dashboard />,
        pageName: 'Checkout',
        to: routeMap.dashboard,
      },
      {
        icon: <Dashboard />,
        pageName: 'Payment Links',
        to: routeMap.dashboard,
      },
    ],
  },
  {
    groupTitle: 'Send payments',
    pages: [
      {
        icon: <Dashboard />,
        pageName: 'Wire',
        to: routeMap.dashboard,
      },
    ],
  },
];

export default routes;
