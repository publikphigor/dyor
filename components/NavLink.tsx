const NavLink = ({ link, text }) => {
  return (
    <li
      className={`relative after:absolute hover:text-brand-gray hover:after:w-full after:transition-[width] after:duration-500 after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-[5px]`}
    >
      <a href={link} className="text-3xl lg:text-[14px]">
        {text}
      </a>
    </li>
  );
};
export default NavLink;
