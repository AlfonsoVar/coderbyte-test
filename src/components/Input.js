import '../css/Input.css';

const Input = (props) => {
    return(
        <div className="input">
            <label>{props.label}</label>
            <div className="input-field">
                <input type={props.type} name={props.name}></input>
                <img src={props.imgSrc}></img>
            </div>
        </div>
    );
}

export default Input;