import { ReactNode } from "react";
import { FaCarSide } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";
import Sidebar, { MenuSidebar } from "../../fragments/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

const listSidebarItem: MenuSidebar[] = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: <MdSpaceDashboard size={15} />,
  },
  {
    title: "Paket Jeep",
    url: "/admin/jeep-package",
    icon: <FaCarSide size={15} />,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: <GrGroup size={15} />,
  },
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar menus={listSidebarItem} />
      <main className="w-full px-10 py-8">{children}</main>
    </div>
  );
};

export default AdminLayout;
