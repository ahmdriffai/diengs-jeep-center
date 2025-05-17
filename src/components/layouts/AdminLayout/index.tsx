import Sidebar, { MenuSidebar } from "@/components/fragments/Sidebar";
import { ReactNode } from "react";
import { FaCarSide } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

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
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar menus={listSidebarItem} />
      {children}
    </div>
  );
};

export default AdminLayout;
