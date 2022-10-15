const Button = ({ link, text, handler, fill }) => {
  const btnStyle = `${
    fill
      ? "text-black bg-white hover:bg-secondary hover:border-secondary hover:text-white border-white"
      : "text-white hover:text-black hover:bg-white border-white"
  } ${
    link ? "inline-block" : ""
  } border-[2px] py-[8px] px-[40px] font-semibold rounded-[5px] text-2xl lg:text-[14px] transition-colors duration-500 cursor-pointer lg:mx-0 leading-[1] w-[100%] lg:w-auto max-w-[350px]`;

  if (link && !handler) {
    return (
      <a href={link} target="_blank" className={btnStyle}>
        {text}
      </a>
    );
  }
  if (handler && !link) {
    return (
      <button onClick={handler} className={btnStyle}>
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
        className={`${btnStyle}`}
      >
        {text}
      </a>
    );
  }

  return <button className={btnStyle}>{text}</button>;
};
export default Button;
