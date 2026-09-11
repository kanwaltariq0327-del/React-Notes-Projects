function Clicked() {
    console.log("clicked");
}

function MouseOver() {
    console.log("mouse over");
}

function DblClicked() {
    console.log("double clicked")
}

function Button() {
  return (
    <div>
      <button onClick={Clicked}>Click Me!</button>
      <hr />
      <p onMouseOver={MouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis minima necessitatibus ea, doloremque ipsam.</p>
      <hr />
      <button onDoubleClick={DblClicked}>Double Click!</button>
    </div>
  );
}

export default Button;