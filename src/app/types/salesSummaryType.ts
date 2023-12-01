type salesSummaryT = {
    info: {
        id: number,
        duration: string,
        cardTheme: string,
        amount: string,
        dateRange: string | null,
        chart: boolean,
        data: number[] | null,
    }
};

export default salesSummaryT;
