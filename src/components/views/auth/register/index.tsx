import AuthLayout from "@/components/layouts/AuthLayout";
import Input from "@/components/ui/Input";
import authService from "@/services/auth";
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

    const result = await authService.registerAccount(data);

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
    <AuthLayout
      link="/auth/login"
      error={error}
      linkText="Already have an account ? Sign in "
      title="Register"
    >
      <form onSubmit={hadleSubmit}>
        <Input
          name="fullname"
          label="Full Name"
          placeholder="Masukan Fullname"
        />

        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Masukan Email"
        />

        <Input name="phone" label="phone" placeholder="Masukan Phone" />

        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Masukan Password"
        />

        <button
          type="submit"
          className="bg-primary cursor-pointer rounded text-white w-full p-[10px]"
        >
          {isLoading ? "Loading ..." : "Register"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default RegisterView;
