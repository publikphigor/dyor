function NavLink({ link, text }) {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
}

const Navbar = () => {
  return (
    <header className="w-full py-3 px-[24px] lg:px-[2.5%] flex items-center justify-between">
      <h1 className="font-bold text-3xl">DYOR</h1>
      <nav className="w-[50%]">
        <ul className="w-full flex items-center gap-6">
          <NavLink link="/" text="Home" />
          <NavLink link="/" text="Exchanges" />
          <NavLink link="/" text="Cryptocurrencies" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
