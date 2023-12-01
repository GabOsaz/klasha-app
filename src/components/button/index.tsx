/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';

function Button({ text, className, leftIcon }: {
    text: string, className: string, leftIcon?: ReactNode
}) {
  return (
    <button
      type="button"
      className={`py-3 text-xs flex items-center px-3 font-semibold ${className}`}
    >
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      <span>{text}</span>
    </button>
  );
}

export default Button;
