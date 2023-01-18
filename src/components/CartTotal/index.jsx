import React from "react";
import "./styles.css";

export default function CartTotal({ price, setCurrentSale }) {
  function removeAll() {
    setCurrentSale([]);
  }
  return (
    <div className="cartTotalContainer">
      <div className={"cartTotalInnerContainer"}>
        <h4>Total</h4>
        <p>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className="cartTotalButtonContainer">
        <button onClick={removeAll}>Remover todos</button>
      </div>
    </div>
  );
}
