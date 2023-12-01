import historyTableT from '@/app/types/historyTableT';
import Pagination from '@/components/pagination';
import { useState } from 'react';

function Table({ tHead, paginatedData }: historyTableT) {
  const [currentPage, setCurrentPage] = useState(1);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className="rounded-2xl border overflow-x-auto w-full border-transparent">
      <table>
        <thead
          className="border-b bg-opacity-75 rounded-3xl text-sm md:text-base"
        >
          <tr>
            {tHead.map((title) => (
              <th key={title} className="text-start px-2 md:px-6 py-4 font-medium">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm md:text-base">
          {paginatedData?.map((eachData) => {
            const {
              transactionId, source, customerName, customerEmail, reqDate, amount,
            } = eachData;
            return (
              <tr key={customerName} className="text-shades-black-700 hover:bg-[#F7F7F7]">
                <td className="td">{transactionId}</td>
                <td className="td">{source}</td>
                <td className="td">{customerName}</td>
                <td className="td">{customerEmail}</td>
                <td className="td">{amount}</td>
                <td className="td">{reqDate}</td>
                <td className="td">{reqDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Pagination
          totalPosts={paginatedData?.length}
          paginateFront={paginateFront}
          paginateBack={paginateBack}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Table;
