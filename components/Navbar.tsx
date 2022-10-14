import { Button } from "../components";

function NavLink({ link, text }) {
  return (
    <li>
      <a href={link} className="text-[14px]">
        {text}
      </a>
    </li>
  );
}

const Navbar = () => {
  return (
    <header className="w-full py-3 px-[24px] lg:px-[15%] flex items-center justify-between">
      <h1 className="font-bold text-3xl">DYOR</h1>
      <nav className="flex gap-20">
        <ul className="flex items-center gap-6">
          <NavLink link="/" text="Home" />
          <NavLink link="/" text="Exchanges" />
          <NavLink link="/" text="Cryptocurrencies" />
        </ul>
        <Button link={false} handler={false} text="Launch App" />
      </nav>
    </header>
  );
};

export default Navbar;
