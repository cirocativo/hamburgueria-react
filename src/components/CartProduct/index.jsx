import { Card } from "./styles";

export default function CartProduct({
  product,
  currentSale,
  setCurrentSale,
  index,
}) {
  return (
    <Card>
      <div className="cartDiv">
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div className="cartMainContainer">
          <h4>{product.name}</h4>
          <p>{product.category}</p>
        </div>
      </div>
      <div className="cartRemoveContainer">
        <p
          onClick={() =>
            setCurrentSale(currentSale.filter((_, i) => i !== index))
          }
        >
          Remover
        </p>
      </div>
    </Card>
  );
}
