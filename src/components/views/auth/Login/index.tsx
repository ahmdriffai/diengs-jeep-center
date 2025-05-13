import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const LoginView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { push, query } = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callbackUrl: any = query.callbackUrl || "/";

  const hadleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });
      console.log(res);
      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email or password is incorrect : " + error);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col h-[100vh] w-full">
      <h1 className="text-[32px] mb-[10px] font-semibold">Login</h1>

      <div className="w-[30%] p-[30px] shadow mb-[20px]">
        {error && (
          <div className="p-3 border my-3 rounded border-merah w-full bg-merah/10">
            {error}
          </div>
        )}
        <form onSubmit={hadleSubmit}>
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
            {isLoading ? "Loading ..." : "Login"}
          </button>
        </form>
      </div>
      <p>
        Dont Have an account? Sign up{" "}
        <Link className="text-primary" href="/auth/register">
          here
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
