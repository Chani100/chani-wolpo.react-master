import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
    numberError: "",
    expiryError: "",
    nameError: "",
  });

  const validateCVV = (value) => {
    if (value.length !== 3) {
      setState((prev) => ({ ...prev, cvc: value.substring(0, 3) }));
    }
  };

  const validateCardNumber = (value) => {
    if (value.length < 14 || value.length > 16) {
      setState((prev) => ({
        ...prev,
        number: value.substring(0, 16),
        numberError: "Card number must be between 14 and 16 digits",
      }));
    } else {
      setState((prev) => ({ ...prev, number: value, numberError: "" }));
    }
  };

  const validateExpiration = (value) => {
    const formattedValue = value.replace(/\D/g, "").substring(0, 4);
    if (formattedValue.length !== 4) {
      setState((prev) => ({
        ...prev,
        expiry: formattedValue,
        expiryError: "Invalid expiration date",
      }));
    } else {
      setState((prev) => ({
        ...prev,
        expiry: formattedValue,
        expiryError: "",
      }));
    }
  };

  const validateName = (value) => {
    if (value.length > 16) {
      setState((prev) => ({
        ...prev,
        name: value.substring(0, 16),
        nameError: "Name can't exceed 16 characters",
      }));
    } else {
      setState((prev) => ({ ...prev, name: value, nameError: "" }));
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));

    if (name === "cvc") {
      validateCVV(value);
    }
    if (name === "number") {
      validateCardNumber(value);
    }
    if (name === "expiry") {
      validateExpiration(value);
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="paymentCard">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <input
          className="paymentForm"
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {state.numberError && <p className="error">{state.numberError}</p>}
      </form>
      <form>
        <input
          className="paymentForm"
          type="number"
          name="expiry"
          placeholder="Card expiry"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {state.expiryError && <p className="error">{state.expiryError}</p>}
      </form>
      <form>
        <input
          className="paymentForm"
          type="number"
          name="cvc"
          placeholder="Card cvc"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
      <form>
        <input
          className="paymentForm"
          type="focus"
          name="name"
          placeholder="Card name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {state.nameError && <p className="error">{state.nameError}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
