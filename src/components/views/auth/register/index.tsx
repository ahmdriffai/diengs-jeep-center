import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const RegisterView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { push } = useRouter();
  const hadleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email already registered");
    }
  };
  return (
    <div className="flex items-center justify-center flex-col h-[100vh] w-full">
      <h1 className="text-[32px] mb-[10px] font-semibold">Register</h1>

      <div className="w-[30%] p-[30px] shadow mb-[20px]">
        {error && (
          <div className="p-3 border my-3 rounded border-merah w-full bg-merah/10">
            {error}
          </div>
        )}
        <form onSubmit={hadleSubmit}>
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="fullname" className="font-medium">
              Full Name
            </label>
            <input
              name="fullname"
              id="fullname"
              className="p-[10px] bg-abu3 mt-[5px] outline-0 rounded"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              className="p-[10px] bg-abu3 mt-[5px] outline-0 rounded"
              type="email"
            />
          </div>
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              className="p-[10px] bg-abu3 mt-[5px] outline-0 rounded"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-[20px]">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              className="p-[10px] bg-abu3 mt-[5px] outline-0 rounded"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="bg-primary cursor-pointer rounded text-white w-full p-[10px]"
          >
            {isLoading ? "Loading ..." : "Register"}
          </button>
        </form>
      </div>
      <p>
        Have an account? Sign in{" "}
        <Link className="text-primary" href="/auth/login">
          here
        </Link>
      </p>
    </div>
  );
};

export default RegisterView;
