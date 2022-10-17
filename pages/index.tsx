import type { NextPage } from "next";
import Head from "next/head";
import { Hero, Navbar, Footer, Cryptocurrencies } from "../components";
import { getTopTenCoins } from "./api/hello";

export async function getStaticProps() {
  const coins = await getTopTenCoins();

  return { props: { coins } };
}

const Home: NextPage = ({ coins }) => {
  return (
    <div className="bg-brand-bg min-h-screen text-white font-open-sans">
      <Head>
        <title>DYOR - Do Your Own Research!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Cryptocurrencies coins={coins} />
      <Footer />
    </div>
  );
};

export default Home;
