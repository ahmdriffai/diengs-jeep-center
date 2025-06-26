import ClientLandingView from "@/components/views/client/Landing";
import Head from "next/head";

// Import Swiper styles
import "swiper/css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dieng Jeep Center - Jelajah Dieng lebi Seru</title>
      </Head>
      <ClientLandingView />
    </>
  );
}
