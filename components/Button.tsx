const Button = ({ link, text, handler, fill }) => {
  const btnStyle = `${
    fill
      ? "dark:text-black dark:bg-white bg-brand-bg text-white hover:bg-secondary dark:hover:bg-secondary hover:border-secondary dark:hover:border-secondary hover:text-white dark:hover:text-white dark:border-white border-brand-bg"
      : "dark:text-white text-black hover:text-white dark:hover:text-white dark:hover:bg-secondary hover:bg-brand-bg dark:border-white dark:hover:border-secondary border-brand-bg"
  } ${
    link ? "inline-block" : ""
  } border-[2px] py-[10px] px-[40px] lg:font-semibold text-center rounded-[5px] text-[14px] transition-colors duration-500 cursor-pointer lg:mx-0 leading-[1] w-[100%] lg:w-auto max-w-[350px]`;

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
