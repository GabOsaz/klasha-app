interface data {
  transactionId: string,
  source: string,
  customerName: string,
  customerEmail: string,
  amount: string,
  reqDate: string,
  status: string,
}

type historyTableT = {
    tHead: string[],
    paginatedData: data[]
};

export default historyTableT;
