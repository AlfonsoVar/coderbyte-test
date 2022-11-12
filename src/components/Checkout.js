import Input from "./Input";
import Button from "./Button";

import '../css/styles.css';

const checkout = () =>{
    return(
        <div className="checkout">
            <div className="checkout-container">
                <h3 className="heading-3">Credit card checkout</h3>
                <Input label={"Cardholder Name"} type={"text"} name={"name"}></Input>
                <Input label={"Card Number"} type={"number"} name={"card_number"} imgSrc={"https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"}></Input>
                <div className="row">
                    <div className="col">
                        <Input label={"Expiration Date"} type={"month"} name={"exp_date"}></Input>
                    </div>
                    <div className="col">
                        <Input label={"CVV"} type={"number"} name={"cvv"}></Input>
                    </div>
                </div>
                <button className="checkout-btn" type="button">Place older</button>
                {/* <Button text={"Place older"}></Button> */}
            </div>
        </div>
    );
};

export default checkout;