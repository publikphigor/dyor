import Link from "next/link";

const NavLink = ({ link, text }) => {
  return (
    <li
      className={`relative after:absolute dark:hover:text-brand-gray hover:after:w-full after:transition-[width] after:duration-500 after:w-0 after:h-[2px] after:bg-secondary dark:after:bg-white after:left-0 after:-bottom-[5px]`}
    >
      <Link href={link}>
        <a className="text-3xl lg:text-[14px]">{text}</a>
      </Link>
    </li>
  );
};
export default NavLink;
