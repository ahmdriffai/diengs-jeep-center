/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcrypt";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";

const db = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function retriveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data;
  return data;
}

export async function signup(
  userData: {
    email: string;
    fullname: string;
    password: string;
    phone: string;
    role?: string;
  },
  callback: (status: boolean) => void
) {
  // cek user is regisered?
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );

  // get user data
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

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

    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback(true);
      })
      .catch((error) => {
        callback(false);
        console.log(error);
      });
  }
}

export async function signin(email: string) {
  // query
  const q = query(collection(db, "users"), where("email", "==", email));

  // get user data
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (data) {
    return data[0];
  }
  return null;
}

export async function loginWithGoogle(
  data: any,
  callback: (data: any) => void
) {
  // query
  const q = query(collection(db, "users"), where("email", "==", data.email));

  // get user data
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (user.length > 0) {
    callback(user[0]);
  } else {
    data.role = "member";
    await addDoc(collection(db, "users"), data).then(() => {
      callback(data);
    });
  }
}
