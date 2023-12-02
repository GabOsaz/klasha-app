/* eslint-disable max-len */

'use client';

import { ChangeEvent, useState } from 'react';
import transactionHistoryData from '@/app/mockData/transactionHistoryData';
import TableHeading from './TableHeading';
import Table from './Table';

export default function Transactions() {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const tHead = ['Transaction ID', 'Source', 'Customer name', 'Customer email', 'Amount', 'Request date', 'Status'];

  return (
    <main className="border rounded-lg py-4 px-0 slide">
      <TableHeading searchValue={searchValue} setSearchValue={handleChange} />
      <div className="mt-4">
        <Table tHead={tHead} paginatedData={transactionHistoryData} />
      </div>
    </main>
  );
}
