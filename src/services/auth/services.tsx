/* eslint-disable @typescript-eslint/no-explicit-any */
import { addData, retriveDataByField } from "@/src/lib/firebase/services";
import bcrypt from "bcrypt";

export async function signup(
  userData: {
    email: string;
    fullname: string;
    password: string;
    phone: string;
    role?: string;
    created_at?: Date;
    update_at?: Date;
  },
  callback: (status: boolean) => void
) {
  // cek user is regisered?
  const data = await retriveDataByField("users", "email", userData.email);

  // validate user data is registered
  if (data.length > 0) {
    callback(false);
  } else {
    // save data
    if (!userData.role) {
      userData.role = "member";
    }

    // hash password
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.created_at = new Date();
    userData.update_at = new Date();

    // add data
    await addData("users", userData, (result: boolean) => {
      callback(result);
    });
  }
}

export async function signin(email: string) {
  // query
  const data = await retriveDataByField("users", "email", email);

  if (data) {
    return data[0];
  }
  return null;
}

export async function loginWithGoogle(
  data: {
    email: string;
    role?: string;
    created_at?: Date;
    update_at?: Date;
    password?: string;
  },
  callback: (data: any) => void
) {
  const user = await retriveDataByField("users", "email", data.email);

  if (user.length > 0) {
    callback(user[0]);
  } else {
    data.role = "member";
    data.created_at = new Date();
    data.update_at = new Date();
    data.password = "";

    await addData("users", data, (result: boolean) => {
      if (result) {
        callback(data);
      }
    });
  }
}
