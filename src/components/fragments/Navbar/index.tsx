import { signIn, signOut, useSession } from "next-auth/react";

const Navbar: React.FC = () => {
  const { data } = useSession();
  return (
    <div className="flex items-center justify-end w-full h-[80px] bg-black text-white fixed p-[20px]">
      <button
        className="bg-white border-0 px-[16px] py-[12px] text-black"
        onClick={() => (data ? signOut() : signIn())}
      >
        {data ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
