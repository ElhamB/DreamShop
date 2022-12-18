const Button = (props) => {
    return <button className={`btn btn-default ${props.class}`} onClick={props.onClick} >
        <span className="text">{props.children}</span>
    </button>
}
export default Button