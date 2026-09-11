import "./Product.css";
import Prices from "./Prices.jsx";

function Product({ Title, Description, idx }) {
  let oldPrices = ["$1200", "$5700", "$513", "$4000"];
  let newPrices = ["$900", "$4000", "$450", "$2700"];
  let description = [
    ["Description 1", "Description 2"],
    ["Description 1", "Description 2"],
    ["Description 1", "Description 2"],
    ["Description 1", "Description 2"],
  ];
  return (
    <div className="Product">
      <h3>{Title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Prices oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
    </div>
  );
}

export default Product;
