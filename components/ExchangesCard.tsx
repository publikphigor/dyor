import Image from "next/image";

interface Props {
  name?: string;
  img?: string;
  url?: string;
  volume?: number;
}

const ExchangesCard = ({
  name = "Binance",
  img = "",
  url = "Binance.com",
  volume = 20000,
}: Props) => {
  return <div>ExchangesCard</div>;
};
export default ExchangesCard;
