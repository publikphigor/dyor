import axios from "axios";
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

/**
 ath: 69045
 ath_change_percentage: -72.12793
 ath_date: "2021-11-10T14:24:11.849Z"
 atl: 67.81
atl_change_percentage: 28280.0204
atl_date: "2013-07-06T00:00:00.000Z"
circulating_supply: 19181150
current_price: 19244.15
fully_diluted_valuation: 404785561590
high_24h: 19342.2
id: "bitcoin"
image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
last_updated: "2022-10-16T22:01:14.749Z"
low_24h: 19030.3
market_cap: 369726313081
market_cap_change_24h: 3322723043
market_cap_change_percentage_24h: 0.90685
market_cap_rank: 1
max_supply: 21000000
name: "Bitcoin"
price_change_24h: 172.71
price_change_percentage_24h: 0.90558
roi: null
symbol: "btc"
total_supply: 21000000
total_volume: 14632467350
`;

*/
