import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Hero, Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-brand-white min-h-screen text-white font-open-sans">
      <Head>
        <title>DYOR - Do Your Own Research!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
