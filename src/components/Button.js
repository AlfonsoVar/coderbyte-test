import '../css/Button.css'

const Button = (props) =>{
    <div>
     <button className="checkout-btn" type="button">{props.text}</button>
    </div>
}

export default Button;