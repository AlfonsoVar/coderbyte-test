import React, { useState } from "react";

import '../css/Input.css';

const Input = (props) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const { value, maxLength } = event.target;
        setValue(value)
        if (props.type === "number") {
            var num = value.slice(0, maxLength)
            setValue(num)
        }
        if (props.name === "card_number") {
            const val = value.replace(/ /g, "");
            let onlyNum = val.replace(/\D/g, "");

            const splits = onlyNum.match(/.{1,4}/g);

            let numAddLine = "";
            if (splits) {
                numAddLine = splits.join("-");
            }
            setValue(numAddLine)
        }
    }

    return (
        <div className="input">
            <label>{props.label}</label>
            <div className="input-field">
                <input
                    maxLength={props.maxLength}
                    type={props.type}
                    name={props.name}
                    value={value}
                    onChange={handleChange}
                />
                <img src={props.imgSrc}></img>
            </div>
        </div>
    );
}

export default Input;