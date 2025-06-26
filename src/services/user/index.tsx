/* eslint-disable @typescript-eslint/no-explicit-any */

import instance from "@/src/lib/axios/instance";

const userService = {
  getAllUsers: () => instance.get("/api/users"),
  updateUser: (id: string, data: any) => instance.put(`/api/users${id}`, data),
};

export default userService;
