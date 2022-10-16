import type { NextPage } from "next";
import Head from "next/head";
import { Hero, Navbar, Footer } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-white font-open-sans">
      <Head>
        <title>DYOR - Do Your Own Research!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
