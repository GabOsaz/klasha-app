import { Dispatch, SetStateAction } from 'react';

type sidebarT = {
    isSidebarCollapsed: boolean,
    setIsSidebarCollapsed: Dispatch<SetStateAction<boolean>>
}

export default sidebarT;
