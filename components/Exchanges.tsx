import { ExchangesCard } from "../components";

const Exchanges = ({ exchanges }) => {
  return (
    <div className="w-full px-[24px] lg:px-0 lg:w-[70%] mx-auto max-w-[1350px] mt-8">
      <h1 className="text-[20px] xsm:text-[32px] md:text-[40px] font-lufga flex items-baseline gap-2 xsm:gap-4">
        Top Exchanges{" "}
        <a href="/" className="text-sm hover:underline">
          View all
        </a>
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 xsm:grid-cols-2 nsm:grid-cols-3 gap-4 place-items-center xsm:place-items-start">
        {exchanges ? (
          exchanges.map((el) => {
            return <ExchangesCard key={el.id} {...el} />;
          })
        ) : (
          <ExchangesCard />
        )}
      </div>
    </div>
  );
};

export default Exchanges;
