interface InputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  className,
}) => {
  return (
    <>
      <div className="flex flex-col mb-[20px]">
        {label && (
          <label htmlFor={name} className="font-medium">
            {label}
          </label>
        )}
        <input
          name={name}
          id={name}
          className={`p-[10px] bg-abu3 mt-[5px] outline-0 rounded ${className}`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
