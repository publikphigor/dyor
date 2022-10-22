// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const BASE_URL = "https://api.coingecko.com/api/v3/";

// Function for fetching each data
export function fetchData(url) {
  const res = axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    url: `${BASE_URL}url`,
    withCredentials: false,
  });

  console.log(res);
  return res;
}

// Function to fetch and return all data
export async function fetchAllData() {
  try {
    // fetch details of top 8 coins
    const coinsRes = await fetchData(
      "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    );

    let coins = coinsRes.data.map((item) => {
      return {
        name: item.id,
        symbol: item.symbol,
        img: item.image,
        price: item.current_price,
        pnl: item.price_change_percentage_24h,
      };
    });

    console.log(coinsRes);

    // fetch details of top 8 exchanges
    const exchangesRes = await fetchData("exchanges?per_page=8");
    let exchanges = exchangesRes.data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        url: item.url,
        img: item.image,
        volume: item.trade_volume_24h_btc,
      };
    });
    return { coins, exchanges };
  } catch (err) {
    console.error(err);
  }
}

export async function getTopTenCoins() {
  try {
    const res = await axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      url: `${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false`,
      withCredentials: false,
    });
    let coins = res.data.map((item) => {
      return {
        name: item.id,
        symbol: item.symbol,
        img: item.image,
        price: item.current_price,
        pnl: item.price_change_percentage_24h,
      };
    });
    console.log(res.data);
    return coins;
  } catch (err) {
    console.error(err);
  }
}
