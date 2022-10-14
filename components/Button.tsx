const Button = ({ link, text, handler }) => {
  if (link) {
    return (
      <a
        href={link}
        className="border-[2px] py-[8px] px-[40px] font-semibold border-white text-white rounded-[5px] text-[14px] transition-colors duration-500 hover:text-black hover:bg-white cursor-pointer"
      >
        {text}
      </a>
    );
  }
  if (handler && !link) {
    return (
      <button
        onClick={handler}
        className="border-[2px] py-[8px] px-[40px] font-semibold border-white text-white rounded-[5px] text-[14px] transition-colors duration-500 hover:text-black hover:bg-white cursor-pointer"
      >
        {text}
      </button>
    );
  }

  if (handler && link) {
    return (
      <a
        href={link}
        onClick={handler}
        className="border-[2px] py-[8px] px-[40px] font-semibold border-white text-white rounded-[5px] text-[14px] transition-colors duration-500 hover:text-black hover:bg-white cursor-pointer"
      >
        {text}
      </a>
    );
  }

  return (
    <button className="border-[2px] py-[8px] px-[40px] font-semibold border-white text-white rounded-[5px] text-[14px] transition-colors duration-500 hover:text-black hover:bg-white cursor-pointer">
      {text}
    </button>
  );
};
export default Button;
