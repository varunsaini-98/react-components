import "./button.css";
function Button(props) {
  const { children, style, onClick } = props;
  return (
    <button
      className="btn"
      style={style ? style : { background: "blue", color: "white" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
