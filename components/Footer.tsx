import { FooterLink } from "../components";

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <div className="w-full lg:w-[70%] max-w-[1350px] mx-auto px-[24px] lg:px-0 py-[24px] flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-10">
          <h2 className="uppercase mb-2 lg:mb-4 font-bold text-[14px]">
            Quick Links
          </h2>
          <ul>
            <FooterLink>
              <a href="/" className="text-sm">
                Blockchains
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" className="text-sm">
                Exchanges
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" className="text-sm">
                Cryptocurrencies
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" className="text-sm">
                NFTs
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" className="text-sm">
                DeFi
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" className="text-sm">
                DAOs
              </a>
            </FooterLink>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-10">
          <h2 className="uppercase mb-2 lg:mb-4 font-bold text-[14px]">
            Community
          </h2>
          <ul>
            <FooterLink>
              <a
                href="https://discord.gg/PWJAvd32ZH"
                target="_blank"
                className="text-sm"
              >
                Discord
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" target="_blank" className="text-sm">
                Twitter
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" target="_blank" className="text-sm">
                LinkedIn
              </a>
            </FooterLink>
            <FooterLink>
              <a href="/" target="_blank" className="text-sm">
                Telegram
              </a>
            </FooterLink>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-10">
          <h2 className="uppercase mb-2 lg:mb-4 font-bold text-[14px]">
            Developers
          </h2>
          <ul>
            <FooterLink>
              <a
                href="https://github.com/publikphigor/dyor"
                target="_blank"
                className="text-sm"
              >
                Documentation
              </a>
            </FooterLink>
            <FooterLink>
              <a
                href="https://github.com/publikphigor/dyor"
                target="_blank"
                className="text-sm"
              >
                GitHub
              </a>
            </FooterLink>
            <FooterLink>
              <a
                href="https://github.com/publikphigor/dyor"
                target="_blank"
                className="text-sm"
              >
                Whitepaper
              </a>
            </FooterLink>
            <FooterLink>
              <a
                href="https://github.com/publikphigor/dyor"
                target="_blank"
                className="text-sm"
              >
                Audit
              </a>
            </FooterLink>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-[70%] max-w-[1350px] mx-auto px-[24px] text-center lg:text-right py-[24px]">
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Built with &#129504; & &#10084; by{" "}
          <a
            href="https://github.com/publikphigor"
            className="hover:text-white transition-colors duration-500"
          >
            Koladele Olaitan
          </a>{" "}
          and the{" "}
          <a
            href="/"
            className="hover:text-white transition-colors duration-500"
          >
            Community
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
