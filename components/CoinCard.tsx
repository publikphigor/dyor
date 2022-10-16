import Image from "next/image";
import { hero_img } from "../assets";

const CoinCard = ({ symbol, name, img, pnl, price }) => {
  return (
    <div className="rounded-xl p-[24px] w-[200px] bg-neutral-800 hover:bg-neutral-700 transition-colors duration-500 cursor-pointer">
      <h1 className="font-lufga text-3xl uppercase">
        {symbol ? symbol : "BTC"}
      </h1>
      <h2>{price ? `$${price}` : "$20000"}</h2>
      <div className="w-full my-4">
        <Image src={img ? img : hero_img} layout="fill" />
      </div>
      <div className="w-full">
        <h3 className="font-normal text-xl">
          {name ? `${name[0].toUpperCase() + name.slice(1)}` : "Bitcoin"}{" "}
          <span
            className={`px-2 py-1 bg-white rounded-md text-sm ${
              pnl > 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {pnl ? `${Math.abs(pnl).toFixed(2)}%` : "1%"}
          </span>
        </h3>
      </div>
    </div>
  );
};
export default CoinCard;
