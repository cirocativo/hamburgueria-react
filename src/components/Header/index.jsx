import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

export default function Header({ products, setFilteredProducts }) {
  function submitHandler(e) {
    e.preventDefault();
    const searchingProduct = e.target[0].value.toLowerCase();
    e.target[0].value = "";
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchingProduct) ||
          product.category.toLowerCase().includes(searchingProduct)
      )
    );
  }

  return (
    <header>
      <img src={logo} alt="" />
      <form className="inputBox" onSubmit={submitHandler}>
        <input
          className="inputSearch"
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <button>Pesquisar</button>
      </form>
    </header>
  );
}
