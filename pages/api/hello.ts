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
    return coins;
  } catch (err) {
    console.error(err);
  }
}
