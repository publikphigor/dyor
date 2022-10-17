import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Hero, Navbar, Footer, Cryptocurrencies } from "../components";
import { getTopTenCoins } from "./api/hello";
import { og_img } from "../assets";

export const getStaticProps: GetStaticProps = async () => {
  const coins = await getTopTenCoins();

  return { props: { coins } };
};

const Home: NextPage = ({
  coins,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="bg-brand-bg min-h-screen text-white font-open-sans overflow-hidden">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Author" content="Koladele Olaitan" />
        <meta property="og:title" content="DYOR - Do Your Own Research!" />
        <meta property="og:type" content="Webpage" />
        <meta property="og:url" content="https://cryptodyor.vercel.app/" />
        <meta
          property="og:image"
          content="https://cryptodyor.vercel.app/assets/og_img.png"
        />
        <meta
          name="description"
          content="Look up real-time data (prices, TVLs, on-chain data) about Tokens, Exchanges, NFTs, Blockchains, etc."
        />
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
