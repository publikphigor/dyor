import { Button } from "../components";

function NavLink({ link, text }) {
  return (
    <li
      className={`relative after:absolute hover:text-brand-gray hover:after:w-full after:transition-[width] after:duration-500 after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-[5px]`}
    >
      <a href={link} className="text-[14px]">
        {text}
      </a>
    </li>
  );
}

const Navbar = () => {
  return (
    <header className="w-full py-3 px-[24px] lg:px-0 lg:w-[70%] mx-auto flex items-center justify-between">
      <h1 className="font-bold text-3xl">DYOR</h1>
      <nav className="flex gap-20">
        <ul className="flex items-center gap-6">
          <NavLink link="/" text="Exchanges" />
          <NavLink link="/" text="Cryptocurrencies" />
          <NavLink link="/" text="NFTs" />
        </ul>
        <Button link={false} handler={false} fill={true} text="Launch App" />
      </nav>
    </header>
  );
};

export default Navbar;
