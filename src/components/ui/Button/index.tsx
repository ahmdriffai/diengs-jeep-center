import { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  variant: "primary" | "outlined";
  strech?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  icon,
  className,
  variant,
  strech,
}) => {
  let variantClass = "";

  switch (variant) {
    case "primary": {
      variantClass = "text-white bg-primary";
      break;
    }
    case "outlined": {
      variantClass = "text-black bg-white border";
      break;
    }
  }

  console.log(variantClass);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer rounded flex items-center justify-center gap-x-3 border  px-[30px] py-[8px] ${
        strech && "w-full"
      } ${variantClass} ${className}`}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
