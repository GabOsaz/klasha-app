/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */

import paginationT from '@/app/types/paginationT';
import Chevron from '@/assets/navbarIcons/Chevron';
import ReactPaginate from 'react-paginate';

const usePaginationLogic = (
  currentPage: number,
  postsPerPage: number,
  totalPosts: number | undefined,
) => {
  const showingFrom = currentPage * postsPerPage - (postsPerPage - 1);
  const showingTo = currentPage * postsPerPage;
  const disableBackBtn = currentPage * postsPerPage - (postsPerPage - 1) === 1;
  const disableFrontBtn = totalPosts ? (currentPage * postsPerPage >= totalPosts) : true;

  return {
    showingFrom,
    showingTo,
    disableBackBtn,
    disableFrontBtn,
  };
};

export default function Pagination({
  totalPosts,
}: paginationT) {
  return (
    <div className="px-6 py-2 mt-4 w-[375px]">
      <ReactPaginate
        previousLabel={(
          <div className="rotate-90">
            <Chevron w="18" />
          </div>
        )}
        nextLabel={(
          <div className="-rotate-90">
            <Chevron w="18" />
          </div>
        )}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={totalPosts ?? 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="flex justify-end border px-4 py-2 rounded-lg w-full space-x-8 text-[#A39D9E] font-semibold text-sm items-center"
        activeClassName="bg-[#F0F0F0] text-shades-black px-3 py-1 rounded-full"
      />
    </div>
  );
}
