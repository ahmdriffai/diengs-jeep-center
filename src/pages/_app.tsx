import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${barlow.className} font-medium text-sm`}>
      <Component {...pageProps} />
    </div>
  );
}
