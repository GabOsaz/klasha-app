/* eslint-disable react/require-default-props */
import buttonT from '../../app/types/buttonT';

function Button({
  text, className, leftIcon, rightIcon, onClick,
}: buttonT) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-3 text-xs flex items-center px-3 font-semibold ${className}`}
    >
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      <span>{text}</span>
      {rightIcon && <span className="ml-3">{rightIcon}</span>}
    </button>
  );
}

export default Button;
