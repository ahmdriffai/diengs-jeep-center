import Navbar from "@/components/fragments/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import { useRouter } from "next/router";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const disableNavbar = ["auth", "admin"];

  return (
    <SessionProvider session={session}>
      <div className={`${barlow.className} font-medium text-sm`}>
        {!disableNavbar.includes(router.pathname.split("/")[1]) && <Navbar />}

        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
