import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  error?: string;
  children: ReactNode;
  title?: string;
  link: string;
  linkText?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  error,
  link,
  linkText,
  title,
}) => {
  return (
    <div className="flex items-center justify-center flex-col h-[100vh] w-full">
      <h1 className="text-[28px] mb-[10px] font-semibold">{title}</h1>
      <div className="w-[350px] p-[30px] shadow mb-[20px]">
        {error && (
          <div className="p-3 border my-3 rounded border-merah w-full bg-merah/10">
            {error}
          </div>
        )}
        {children}
      </div>
      <p>
        {linkText}
        <Link className="text-primary" href={link}>
          here
        </Link>
      </p>
    </div>
  );
};

export default AuthLayout;
