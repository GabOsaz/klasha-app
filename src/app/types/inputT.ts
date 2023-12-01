import { ReactNode } from 'react';

type inputT = {
    type: string,
    placeholder: string,
    rightIcon?: ReactNode,
    className?: string,
    value: string,
    onChange: () => void,
};

export default inputT;
