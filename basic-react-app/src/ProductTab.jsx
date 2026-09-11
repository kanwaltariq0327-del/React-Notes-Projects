import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display : "flex",
        justifyContent : "center",
        backgroundColor : "#282828ff",
        color : "#fff",
        marginBottom : "20px"
    }
  return (
    <div style={styles}>
      <Product Title = "Title 1" idx = {0} />
      <Product Title = "Title 2" idx = {1} />
      <Product Title = "Title 3" idx = {2} />
      <Product Title = "Title 4" idx = {3} />
    </div>
  );
}

export default ProductTab;
