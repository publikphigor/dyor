import Image from "next/image";
import { Button } from "../components";
import { hero_img } from "../assets";

const Hero = () => {
  return (
    <div className="w-full  hero_bg">
      <div className="px-[24px] lg:px-0 lg:w-[70%] mx-auto my-[40px] flex items-center justify-between min-h-[400px] relative">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-[48px] font-normal leading-[1.2]">
            Stay up-to-date in crypto. <br /> Do your own research today!
          </h1>
          <p className="my-3">
            This is an open-source tool for doing research in crypto. You can
            easily look up real-time data (prices, TVLs, on-chain data) about
            Tokens, Exchanges, NFTs, Blockchains, etc.
          </p>
          <div className="flex items-center gap-3">
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
              text="Contibute on GitHub"
            />
          </div>
        </div>
        <div className="w-full lg:w-[40%] relative">
          <div className="hero-img--gradient absolute -top-[20%] -left-[20%] w-full h-full rounded-full"></div>
          <Image src={hero_img} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
