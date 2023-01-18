import React from "react";
import { List } from "./styles";
import Product from "../Product";

export default function ProductsList({
  products,
  currentSale,
  setCurrentSale,
}) {
  return (
    products && (
      <List>
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          ></Product>
        ))}
      </List>
    )
  );
}
