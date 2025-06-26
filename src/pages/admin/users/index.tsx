import AdminUserView from "@/src/components/views/admin/Users";
import userService from "@/src/services/user";
import { useEffect, useState } from "react";

const AdminUserPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userService.getAllUsers();
      setUsers(data.data);
    };

    getAllUsers();
  }, []);

  return (
    <>
      <AdminUserView users={users} />
    </>
  );
};

export default AdminUserPage;
