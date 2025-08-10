function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-400 cursor-pointer text-white p-2 rounded-md ml-2"
    >
      {props.children}
    </button>
  );
}

export default Button;
