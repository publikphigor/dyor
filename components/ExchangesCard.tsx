import Image from "next/image";
import Link from "next/link";
import { ExchangesProps } from "../types";

const ExchangesCard = ({
  name = "Binance",
  img = "",
  url = "Binance.com",
  volume = 20000,
}: ExchangesProps) => {
  return (
    <Link href={url} target="_blank">
      <div className="rounded-xl p-[12px] dark:bg-neutral-700 bg-white hover:bg-brand-gray-200 shadow-lg dark:shadow-none dark:hover:bg-neutral-800 transition-colors duration-500 cursor-pointer text-center w-[200px] xsm:w-[170px] ssm:w-[185px] nsm:w-[160px] md:w-[180px] lg:min-w-[200px] h-[200px] max-h-[200px]">
        <h1 className="font-lufga text-2xl">{name}</h1>
        <div className="w-full my-4">
          {img && <Image src={img} width={50} height={50} />}
        </div>
        <h3>{`${volume.toFixed(0)} BTC`}</h3>
      </div>
    </Link>
  );
};
export default ExchangesCard;
