import { useState } from "react";
import CoinCard from "./CoinCard";
import { getTopTenCoins } from "../api";

const Cryptocurrencies = () => {
  const [coinList, setCoinList] = useState([]);

  getTopTenCoins().then((coins) => setCoinList(coins));
  return (
    <div className="w-full px-[24px] lg:px-0 lg:w-[70%] mx-auto max-w-[1350px] ">
      <h1 className="text-[40px] font-lufga flex items-baseline gap-4">
        Cryptocurrencies{" "}
        <a href="/" className="text-sm hover:underline">
          View all
        </a>
      </h1>
      <div className="w-full flex flex-wrap gap-4">
        {coinList ? (
          coinList.map((el) => {
            return <CoinCard key={el.name} {...el} />;
          })
        ) : (
          <CoinCard />
        )}
      </div>
    </div>
  );
};
export default Cryptocurrencies;
