import Input from "./Input";
import Button from "./Button";


const checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout-container">
                <h3 className="heading-3">Ingrese tarjeta de credito</h3>
                <Input label={"Nombre propietario"} type={"text"} name={"name"}></Input>
                <Input maxLength={"19"} label={"Numero de tarjeta"} type={"text"} name={"card_number"} imgSrc={"https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"}></Input>
                <div className="row">
                    <div className="col">
                        <Input label={"Fecha de expiración"} type={"month"} name={"exp_date"}></Input>
                    </div>
                    <div className="col">
                        <Input maxLength={"4"} label={"CVV"} type={"number"} name={"cvv"}></Input>
                    </div>
                </div>
                <button className="checkout-btn" type="button">Place order</button>
                {/* <Button text={"Place older"}></Button> */}
            </div>
        </div>
    );
};

export default checkout;