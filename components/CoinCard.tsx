import Image from "next/image";

interface Props {
  symbol?: string;
  name?: string;
  img?: string;
  pnl?: number;
  price?: number;
}

const CoinCard = ({
  symbol = "BTC",
  name = "Bitcoin",
  img,
  pnl = 1,
  price = 20000,
}: Props) => {
  return (
    <div className="rounded-xl p-[24px] w-[200px] bg-neutral-700 hover:bg-neutral-800 transition-colors duration-500 cursor-pointer">
      <h1 className="font-lufga text-3xl uppercase">{symbol}</h1>
      <h2>{`$${price}`}</h2>
      <div className="w-full my-4">
        {img && <Image src={img} width={50} height={50} />}
      </div>
      <div className="w-full">
        <h3 className="font-normal text-[16px]">
          {`${name[0].toUpperCase() + name.slice(1)}`}{" "}
          <span
            className={`px-2 py-1 bg-white rounded-md text-sm ${
              pnl > 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {`${Math.abs(pnl).toFixed(2)}%`}
          </span>
        </h3>
      </div>
    </div>
  );
};
export default CoinCard;
