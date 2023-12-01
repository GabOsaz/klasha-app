type paginationT = {
    postsPerPage?: number
    totalPosts: number | undefined
    paginateFront: () => void
    paginateBack: () => void
    currentPage: number
    isLoading?: boolean
};

export default paginationT;
