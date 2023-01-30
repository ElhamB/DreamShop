const Button = (props) => {
    return <button className={`btn btn-default ${props.class}`} disabled={props.disabled} onClick={props.onClick} >
        <span className="text">{props.children}</span>
    </button>
}
export default Button