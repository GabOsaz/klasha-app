import { ReactNode } from 'react';

type buttonT = {
    text: string,
    className: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    dataTestId?: string,
    onClick?: () => void
}

export default buttonT;
