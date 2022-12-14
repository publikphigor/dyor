import Head from "next/head";
import { ThemeProvider } from "next-themes";
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
// import Head from "next/head";
import {
  Hero,
  Navbar,
  Footer,
  Cryptocurrencies,
  ThemeToggler,
  Exchanges,
} from "../components";
import { fetchAllData } from "./api/hello";

export const getStaticProps: GetStaticProps = async () => {
  const { coins, exchanges } = await fetchAllData();

  return { props: { coins, exchanges } };
};

const Home: NextPage = ({
  coins,
  exchanges,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
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
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="transition-colors duration-300 dark:bg-brand-bg dark:text-white bg-white text-brand-bg min-h-screen font-open-sans overflow-hidden">
          <Navbar />
          <Hero />
          <Cryptocurrencies coins={coins} />
          <Exchanges exchanges={exchanges} />
          <ThemeToggler />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Home;
