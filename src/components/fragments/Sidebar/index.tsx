import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { LuLogOut } from "react-icons/lu";

export type MenuSidebar = {
  title: string;
  url: string;
  icon: ReactNode;
};

interface SidebarProps {
  menus: MenuSidebar[];
}

const Sidebar: React.FC<SidebarProps> = ({ menus }) => {
  const { pathname } = useRouter();
  return (
    <div className="bg-black text-white p-[30px] font-medium h-screen w-70 flex flex-col justify-between">
      <div>
        <h1 className="text-lg text-center mb-5">Dieng Jeep Center</h1>
        {menus.map((menu, index) => (
          <Link
            href={menu.url}
            key={index}
            className={`flex items-center justify-start gap-x-3 text-md hover:bg-white rounded p-2 text-md mb-2 hover:text-black transition-all duration-300 ${
              pathname === menu.url && "bg-white text-black"
            }`}
          >
            {menu.icon}
            <h4>{menu.title}</h4>
          </Link>
        ))}
      </div>
      <div>
        <Button variant="outlined" strech icon={<LuLogOut />} onClick={signOut}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
