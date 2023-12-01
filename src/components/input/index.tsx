import inputT from '@/app/types/inputT';

function Input({
  type, placeholder, rightIcon, className, value, onChange,
}: inputT) {
  return (
    <div className="relative w-[180px]">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`border rounded-lg py-2.5 px-[14px] ${className}`}
        placeholder={placeholder}
      />
      {rightIcon && <span className="absolute top-[25%] -right-5">{rightIcon}</span>}
    </div>
  );
}

export default Input;
