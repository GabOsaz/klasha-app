import { ReactNode } from 'react';

type buttonT = {
    text: string,
    className: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    onClick?: () => void
}

export default buttonT;
