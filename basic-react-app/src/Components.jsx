import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import LikeButton from "./LikeButton.jsx";
import TodoApp from "./TodoApp.jsx";


function Components() {
  return (
    <>
      <h1>Products cards in React</h1>
      <ProductTab />
      <h1>Events handling</h1>
      <Button />
      <h1>Event handling and default behavior of forms</h1>
      <Form />
      <h1>States in React</h1>
      <LikeButton />
      <h1>Todo App</h1>
      <TodoApp />
    </>
  );
}

export default Components;
