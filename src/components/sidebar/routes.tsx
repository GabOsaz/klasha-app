import Dashboard from '../../assets/sidebarSvgIcons/Dashboard';
import Balances from '../../assets/sidebarSvgIcons/Balances';
import Transactions from '../../assets/sidebarSvgIcons/Transactions';
import Analytics from '../../assets/sidebarSvgIcons/Analytics';
import Marketing from '../../assets/sidebarSvgIcons/Marketing';
import ExchangeRate from '../../assets/sidebarSvgIcons/ExchangeRate';
import Checkout from '../../assets/sidebarSvgIcons/Checkout';
import PaymentLinks from '../../assets/sidebarSvgIcons/PaymentLinks';
import Wire from '../../assets/sidebarSvgIcons/Wire';
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
        icon: <Checkout route={routeMap.checkout} />,
        pageName: 'Checkout',
        to: routeMap.checkout,
      },
      {
        icon: <PaymentLinks route={routeMap.paymentLinks} />,
        pageName: 'Payment Links',
        to: routeMap.paymentLinks,
      },
    ],
  },
  {
    groupTitle: 'Send payments',
    pages: [
      {
        icon: <Wire route={routeMap.wire} />,
        pageName: 'Wire',
        to: routeMap.wire,
      },
    ],
  },
];

export default routes;
