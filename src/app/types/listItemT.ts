import { ReactNode, Dispatch, SetStateAction } from 'react';

type listItemT = {
  page: {
    icon: ReactNode,
    pageName: string,
    to: string,
  },
  setIsOpen?: Dispatch<SetStateAction<boolean>>
  isSidebarCollapsed?: boolean
};

export default listItemT;
