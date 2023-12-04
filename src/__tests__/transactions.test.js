/* eslint-disable no-undef */
import {
  render, screen,
} from '@testing-library/react';
import Transactions from '../app/transactions/page';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<Transactions />);
});

describe('Transactions test', () => {
  it('renders the transactions module', () => {
    render(<Transactions />);
  });
});

describe('Transactions heading', () => {
  it('renders a heading', () => {
    const headingText = screen.getByText('Transaction history');

    expect(headingText).toBeInTheDocument();
  });
});

describe('Filter and export btns availability', () => {
  it('checks for a filter button', () => {
    const filterBtn = screen.getByText(/filter/i);

    expect(filterBtn).toBeInTheDocument();
  });

  it('checks for an export button', () => {
    const exportBtn = screen.getByText(/export/i);

    expect(exportBtn).toBeInTheDocument();
  });
});
