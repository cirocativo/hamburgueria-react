import React from "react";
import {
  ProductCard,
  ProductImage,
  ProductFigure,
  ProductCategory,
  ProductValue,
  ProductInfo,
} from "./styles";

export default function Product({ product, currentSale, setCurrentSale }) {
  function addToCart() {
    !currentSale.some((p) => p.id === product.id) &&
      setCurrentSale([...currentSale, product]);
  }

  return (
    product && (
      <ProductCard>
        <ProductFigure>
          <ProductImage
            imageSrc={product.img}
            imageAlt={product.name}
          ></ProductImage>
        </ProductFigure>
        <ProductInfo>
          <h3>{product.name}</h3>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductValue>
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </ProductValue>
          <button onClick={addToCart}>Adicionar</button>
        </ProductInfo>
      </ProductCard>
    )
  );
}
