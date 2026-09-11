function Prices({oldPrices, newPrices}) {
    let styles = {
        display : "flex", 
        gap : "20px",
        backgroundColor : "grey",
        marginTop : "20px",
        borderBottomRightRadius : "10px",
        borderBottomLeftRadius : "10px"
    }
   let opStyle = {
        textDecorationLine : "line-through",
        margin : "0 20px"
    }
    let npStyle = {
        fontWeight : "bold",
        margin : "0 20px"
    }


  return (
    <div style={styles}>
      <p style={opStyle}>{oldPrices}</p>
      <p style={npStyle}>{newPrices}</p>
    </div>
  );
}

export default Prices