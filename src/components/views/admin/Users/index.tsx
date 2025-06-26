/* eslint-disable @typescript-eslint/no-explicit-any */

import AdminLayout from "@/src/components/layouts/AdminLayout";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import Modal from "@/src/components/ui/Modal";
import React, { useState } from "react";

interface AdminUserViewProps {
  users: any[];
}

const AdminUserView: React.FC<AdminUserViewProps> = ({ users }) => {
  const [modalUpdate, setModalUpdate] = useState<any>({});
  return (
    <>
      <AdminLayout>
        <div>
          <h2 className="text-2xl font-medium">User Page</h2>
          <table className="min-w-full leading-normal mt-5">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  #
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Fullname
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Phone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Role
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {index + 1}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {user.fullname}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {user.email}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {user.phone}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {user.role}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2">
                    <Button
                      variant="primary"
                      onClick={() => setModalUpdate(user)}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
      {Object.keys(modalUpdate).length && (
        <Modal onClose={() => setModalUpdate({})}>
          <h1>Modal User</h1>
          <Input name="email" label="Email" />
          <p>{modalUpdate.email}</p>
          <p>{modalUpdate.fullname}</p>
        </Modal>
      )}
    </>
  );
};

export default AdminUserView;
