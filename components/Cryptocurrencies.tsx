import CoinCard from "./CoinCard";

const Cryptocurrencies = ({ coins }) => {
  return (
    <div className="w-full px-[24px] lg:px-0 lg:w-[70%] mx-auto max-w-[1350px] ">
      <h1 className="text-[40px] font-lufga flex items-baseline gap-4">
        Cryptocurrencies{" "}
        <a href="/" className="text-sm hover:underline">
          View all
        </a>
      </h1>
      <div className="w-full flex flex-wrap gap-4">
        {coins ? (
          coins.map((el) => {
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
