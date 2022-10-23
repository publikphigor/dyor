import Image from "next/image";
import { Button } from "../components";
import { hero_img } from "../assets";

const Hero = () => {
  return (
    <div className="w-full dark:hero_bg pt-[100px]">
      <div className="px-[24px] lg:px-0 lg:w-[70%] mx-auto my-[40px] flex flex-col lg:flex-row items-center justify-between min-h-[400px] relative">
        <div className="w-full lg:w-[60%] mb-[40px]">
          <h1 className="text-[40px] font-medium leading-[1.2] text-center lg:text-left font-lufga">
            Stay up-to-date in crypto. <br /> Do your own research!
          </h1>
          <p className="my-5 md:my-3 text-center lg:text-left">
            This is an open-source tool for doing research in crypto. You can
            easily look up real-time data (prices, TVLs, on-chain data) about
            Tokens, Exchanges, NFTs, Blockchains, etc.
          </p>
          <div className="flex items-center gap-3 flex-col md:flex-row">
            <Button
              link={false}
              handler={false}
              fill={true}
              text="Launch App"
            />
            <Button
              link="https://github.com/publikphigor/dyor"
              handler={false}
              fill={false}
              text="Contribute on GitHub"
            />
          </div>
        </div>
        <div className="w-full lg:w-[40%] max-w-[500px] mx-auto relative">
          <div className="dark:hero-img--gradient absolute -top-[20%] -left-[20%] w-full h-full rounded-full"></div>
          <Image src={hero_img} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
