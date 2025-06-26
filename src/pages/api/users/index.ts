/* eslint-disable @typescript-eslint/no-explicit-any */

import { retriveData, updateData } from "@/src/lib/firebase/services";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const users = await retriveData("users");
    const data = users.map((user: any) => {
      delete user.password;
      return user;
    });
    res.status(200).json({ status: true, statusCode: 200, data });
  } else if (req.method == "PUT") {
    const { id, data } = req.body;

    await updateData("users", id, data, (result: boolean) => {
      if (result) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success" });
      } else {
        res
          .status(400)
          .json({ status: true, statusCode: 400, message: "failed " });
      }
    });
  }
}
