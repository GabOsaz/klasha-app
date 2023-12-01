import Dashboard from '../../assets/sidebarSvgIcons/Dashboard';
import Balances from '../../assets/sidebarSvgIcons/Balances';
import Transactions from '../../assets/sidebarSvgIcons/Transactions';
import Analytics from '../../assets/sidebarSvgIcons/Analytics';
import Marketing from '../../assets/sidebarSvgIcons/Marketing';
import ExchangeRate from '../../assets/sidebarSvgIcons/ExchangeRate';
import Checkout from '../../assets/sidebarSvgIcons/Checkout';
import PaymentLinks from '../../assets/sidebarSvgIcons/PaymentLinks';
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
        icon: <Analytics route={routeMap.analytics} />,
        pageName: 'Analytics',
        to: routeMap.analytics,
      },
      {
        icon: <Marketing route={routeMap.marketing} />,
        pageName: 'Marketing',
        to: routeMap.marketing,
      },
      {
        icon: <ExchangeRate route={routeMap.exchangeRates} />,
        pageName: 'Exchange Rates',
        to: routeMap.exchangeRates,
      },
    ],
  },
  {
    groupTitle: 'Accept payments',
    pages: [
      {
        icon: <Checkout route={routeMap.exchangeRates} />,
        pageName: 'Checkout',
        to: routeMap.exchangeRates,
      },
      {
        icon: <PaymentLinks route={routeMap.exchangeRates} />,
        pageName: 'Payment Links',
        to: routeMap.exchangeRates,
      },
    ],
  },
  {
    groupTitle: 'Send payments',
    pages: [
      {
        icon: <Dashboard route={routeMap.exchangeRates} />,
        pageName: 'Wire',
        to: routeMap.exchangeRates,
      },
    ],
  },
];

export default routes;
