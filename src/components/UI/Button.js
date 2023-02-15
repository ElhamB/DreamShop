const Button = (props) => {
  return (
    <button 
      className={`btn btn-default ${props.cssClass}`} 
      {...props}
    >
      <span className="text">{props.children}</span>
    </button>
  );
};
export default Button;

