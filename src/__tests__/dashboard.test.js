/* eslint-disable no-undef */
import {
  render, screen,
} from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

beforeEach(() => {
  render(<Home />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Dashboard test', () => {
  it('renders the dashboard module', () => {
    render(<Home />);
  });
});

describe('Dashboard heading', () => {
  it('renders a heading', () => {
    const headingText = screen.getByText('Sales Overview');

    expect(headingText).toBeInTheDocument();
  });
});

describe('Dashboard sales overview cards availability', () => {
  it('checks if today\'s card is rendered', () => {
    const todaySalesCard = screen.getByText(/Today's sales/i);

    expect(todaySalesCard).toBeInTheDocument();
  });

  it('checks if this week\'s card is rendered', () => {
    const thisWeekCard = screen.getByText(/This week/i);

    expect(thisWeekCard).toBeInTheDocument();
  });

  it('checks if this month\'s card is rendered', () => {
    const thisMonthCard = screen.getByText(/This month/i);

    expect(thisMonthCard).toBeInTheDocument();
  });

  it('checks if last month\'s card is rendered', () => {
    const lastMonthCard = screen.getByText(/Last month/i);

    expect(lastMonthCard).toBeInTheDocument();
  });
});

describe('Wire card', () => {
  it('checks if the card has the expected text content', () => {
    const wireCardText = screen.getByText(/KlashaWire - send money to businesses globally from Africa/i);
    expect(wireCardText).toBeInTheDocument();
  });

  it('has a CTA button', () => {
    const wireBtn = screen.getByText(/Send a Wire/i);
    expect(wireBtn).toBeInTheDocument();
  });
});
