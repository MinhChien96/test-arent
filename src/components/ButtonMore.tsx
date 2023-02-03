type Props = {
  children: JSX.Element | string;
};

function ButtonMore({ children }: Props) {
  return (
    <button
      className="text-lg text-light py-4 px-16 bg-primary-300/400 rounded-md"
      type="button"
    >
      {children}
    </button>
  );
}

export default ButtonMore;
