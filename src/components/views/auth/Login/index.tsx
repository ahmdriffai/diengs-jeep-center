import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";

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
      <div className="w-[350px] p-[30px] shadow mb-[20px]">
        {error && (
          <div className="p-3 border my-3 rounded border-merah w-full bg-merah/10">
            {error}
          </div>
        )}
        <form onSubmit={hadleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Masukan email"
            label="Email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Masukan password"
            label="Password"
          />
          <Button variant="primary" type="submit" strech>
            {isLoading ? "Loading ..." : "Login"}
          </Button>
        </form>
        <hr className="my-[20px]" />
        <div className="w-full">
          <Button
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            type="button"
            icon={<FcGoogle size={25} />}
            variant="outlined"
            strech
          >
            Login with Google
          </Button>
        </div>
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
