import React from "react";
import "./styles.css";

import CartProduct from "../CartProduct";

export default function Cart({ products, setCurrentSale }) {
  return (
    <div className="cartContainer">
      <div className="cartTitleContainer">
        <h3 className="cartTitle">Carrinho de Compras</h3>
      </div>

      <div className="cartInnerContainer">
        {products.length ? (
          <ul className="cartProductList">
            {products.map((product, index) => (
              <CartProduct
                product={product}
                key={index}
                index={index}
                currentSale={products}
                setCurrentSale={setCurrentSale}
              />
            ))}
          </ul>
        ) : (
          <div className="emptyCartContainer">
            <h3>Sua sacola está vazia</h3>
            <p className="pAddItens">Adicione itens</p>
          </div>
        )}
      </div>
    </div>
  );
}
