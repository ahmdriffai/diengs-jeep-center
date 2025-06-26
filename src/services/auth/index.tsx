/* eslint-disable @typescript-eslint/no-explicit-any */

import instance from "@/src/lib/axios/instance";

const authService = {
  registerAccount: (data: any) => instance.post("/api/users/register", data),
};

export default authService;
