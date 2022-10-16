const FooterLink = ({ children }) => {
  return (
    <li
      className={`relative after:absolute hover:text-brand-gray w-max hover:after:w-full after:transition-[width] after:duration-500 after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-[2px] mb-1`}
    >
      {children}
    </li>
  );
};
export default FooterLink;
