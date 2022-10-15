const Button = ({ link, text, handler, fill }) => {
  if (link && !handler) {
    return (
      <a
        href={link}
        target="_blank"
        className={`${
          fill
            ? "text-black bg-white hover:bg-secondary hover:text-white border-secondary"
            : "text-white hover:text-black hover:bg-white  border-white "
        } border-[2px] py-[8px] px-[40px] font-semibold rounded-[5px] text-[14px] transition-colors duration-500  cursor-pointer`}
      >
        {text}
      </a>
    );
  }
  if (handler && !link) {
    return (
      <button
        onClick={handler}
        className={`${
          fill
            ? "text-black bg-white hover:bg-secondary hover:text-white border-secondary"
            : "text-white hover:text-black hover:bg-white  border-white "
        } border-[2px] py-[8px] px-[40px] font-semibold rounded-[5px] text-[14px] transition-colors duration-500  cursor-pointer`}
      >
        {text}
      </button>
    );
  }

  if (handler && link) {
    return (
      <a
        href={link}
        target="_blank"
        onClick={handler}
        className={`${
          fill
            ? "text-black bg-white hover:bg-secondary hover:text-white border-secondary"
            : "text-white hover:text-black hover:bg-white  border-white "
        } border-[2px] py-[8px] px-[40px] font-semibold rounded-[5px] text-[14px] transition-colors duration-500  cursor-pointer`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      className={`${
        fill
          ? "text-black bg-white hover:bg-secondary hover:text-white border-white hover:border-secondary"
          : "text-white hover:text-black hover:bg-white  border-white"
      } border-[2px] py-[8px] px-[40px] font-semibold  rounded-[5px] text-[14px] transition-colors duration-500  cursor-pointer`}
    >
      {text}
    </button>
  );
};
export default Button;
