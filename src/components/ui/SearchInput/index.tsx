import React from "react";

interface SearchInputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  border?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  type = "text",
  placeholder,
  icon,
  border = false,
}) => {
  return (
    <>
      <div className="w-full max-w-md mx-auto relative">
        <div className="relative">
          <input
            name={name}
            id={name}
            className={`w-full px-4 py-2 h-full focus:outline-none border-gray-300 cursor-pointer ${
              border && "border-r"
            }`}
            type={type}
            placeholder={placeholder}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none">
            {icon}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
