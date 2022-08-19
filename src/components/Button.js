const Button = ({ onClick, children }) => {
  return (
    <button
      className='px-6 py-2 my-2 text-white rounded bg-emerald-500 hover:bg-emerald-600'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
