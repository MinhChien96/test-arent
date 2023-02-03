import IconArrow from 'resources/images/icon-arrow-up.png';

function ScrollTop() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      className="fixed z-[10] bottom-5 right-5 bg-light rounded-full w-12 h-12 border border-solid border-1 border-gray-400 flex justify-center items-center xl:right-[calc((100vw-960px)/2-60px)] cursor-pointer hover:opacity-75"
    >
      <img src={IconArrow} alt="" />
    </button>
  );
}

export default ScrollTop;
