const Button = (props) => {
    return <button type={props.type} className={`btn btn-default ${props.class}`} hidden={props.hidden} disabled={props.disabled} onClick={props.onClick} >
        <span className="text">{props.children}</span>
    </button>
}
export default Button