import { useState } from "react";
import { Button } from "../components";

function NavLink({ link, text }) {
  return (
    <li
      className={`relative after:absolute hover:text-brand-gray hover:after:w-full after:transition-[width] after:duration-500 after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-[5px]`}
    >
      <a href={link} className="text-3xl lg:text-[14px]">
        {text}
      </a>
    </li>
  );
}

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header className="w-full fixed top-0 left-0 bg-inherit z-20">
      <div className="py-[24px] lg:py-3 px-[24px] lg:px-0 lg:w-[70%] mx-auto flex items-center justify-between relative z-10">
        <h1 className="font-bold text-3xl">DYOR</h1>
        <nav
          className={`fixed lg:static bg-secondary lg:bg-inherit min-h-[400px] lg:min-h-0 border-2 lg:border-0 rounded-xl border-white h-auto w-[80%] lg:w-auto right-[24px] top-[150px] z-[9] flex-col lg:flex-row flex gap-10 lg:gap-20 p-[24px] lg:p-0 justify-center lg:justify-start transition duration-500 ${
            isNavOpen ? "translate-y-0" : "-translate-y-[150%] lg:translate-y-0"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6">
            <NavLink link="/" text="Blockchains" />
            <NavLink link="/" text="Exchanges" />
            <NavLink link="/" text="Cryptocurrencies" />
            <NavLink link="/" text="NFTs" />
          </ul>
          <Button link={false} handler={false} fill={true} text="Launch App" />
        </nav>
        <div className="block lg:hidden" onClick={handleClick}>
          {isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
