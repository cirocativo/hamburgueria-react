import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartTotal from "./components/CartTotal";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setFilteredProducts(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(
    () =>
      setCartTotal(
        currentSale.reduce((acc, product) => acc + product.price, 0)
      ),
    [currentSale]
  );

  return (
    <div className="App">
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
      ></Header>
      <div className="mainContainer">
        <main>
          <ProductsList
            products={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          ></ProductsList>
        </main>
        <aside>
          <Cart products={currentSale} setCurrentSale={setCurrentSale}></Cart>
          <CartTotal
            price={cartTotal}
            setCurrentSale={setCurrentSale}
          ></CartTotal>
        </aside>
      </div>
    </div>
  );
}

export default App;
