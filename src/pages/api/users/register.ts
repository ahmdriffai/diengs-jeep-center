import { signup } from "@/services/auth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await signup(req.body, (status: boolean) => {
      if (status) {
        res
          .status(200)
          .json({ statue: true, statusCode: 200, message: "success" });
      } else {
        res
          .status(400)
          .json({ statue: false, statusCode: 400, message: "fail" });
      }
    });
  } else {
    res
      .status(405)
      .json({ statue: false, statusCode: 405, message: "method not allow" });
  }
}
