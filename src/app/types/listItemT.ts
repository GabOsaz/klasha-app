import { ReactNode } from 'react';

type listItemT = {
  page: {
    icon: ReactNode,
    pageName: string,
    to: string,
  },
};

export default listItemT;
