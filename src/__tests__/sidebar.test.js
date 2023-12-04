/* eslint-disable no-undef */
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import Sidebar from '../components/sidebar';
import Layout from '../app/layout';
import Home from '../app/page';
import Transactions from '../app/transactions/page';
import '@testing-library/jest-dom';

afterEach(cleanup);

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

beforeEach(() => {
  render(
    <Layout />,
  );
});

// Mock useRouter:
jest.mock('next/navigation', () => ({
  __esModule: true,
  usePathname: () => ({ pathname: '' }),
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({ get: () => {} }),
  useServerInsertedHTML: jest.fn(),
}));

describe('Sidebar test', () => {
  it('renders the sidebar component', () => {
    render(<Sidebar />);
  });
});

describe('Layout with the sidebar component test', () => {
  it('checks for `Main page` text to be `M` on sidebar collapse', () => {
    const togglePannel = screen.getByTestId('togglePannel');
    const routeGroupText = screen.getAllByTestId('routeGroupText')[0];
    fireEvent.click(togglePannel);
    expect(routeGroupText.textContent).toBe('M');
  });
  it('checks for `Accept payments` text to be `A` on sidebar collapse', () => {
    const togglePannel = screen.getByTestId('togglePannel');
    const routeGroupText = screen.getAllByTestId('routeGroupText')[1];
    fireEvent.click(togglePannel);
    expect(routeGroupText.textContent).toBe('A');
  });
  it('checks for `Send payments` text to be `S` on sidebar collapse', () => {
    const togglePannel = screen.getByTestId('togglePannel');
    const routeGroupText = screen.getAllByTestId('routeGroupText')[2];
    fireEvent.click(togglePannel);
    expect(routeGroupText.textContent).toBe('S');
  });
});

describe('Sidebar module navigation', () => {
  it('checks if clicking dashboard navigate properly', () => {
    render(<Home />);
    const dashboardText = screen.getByText(/Dashboard/i);
    fireEvent.click(dashboardText);
    const headingText = screen.getByText('Sales Overview');
    expect(headingText).toBeInTheDocument();
  });
  it('checks if clicking Transactions navigate properly', () => {
    render(<Transactions />);
    const transactionsPageHeading = screen.getByText(/Transactions/i);
    fireEvent.click(transactionsPageHeading);
    const headingText = screen.getByText('Transaction history');
    expect(headingText).toBeInTheDocument();
  });
});
