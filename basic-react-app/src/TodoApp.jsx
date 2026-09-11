import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");

  // ------------------
  function AddTask() {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTask, id: uuidv4(), isDone: false }];
    });
    setNewTask("");
  }
  //-------------------
  function UpdateTask(event) {
    setNewTask(event.target.value);
  }
  //-------------------
  let deleteTask = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };
  //-------------------
  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };
  //-------------------
  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      }),
    );
  };
  //-------------------
  let markDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      }),
    );
  };
  //-------------------
  let markDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div>
      <input
        placeholder="write your task"
        value={newTask}
        onChange={UpdateTask}
      ></input>
      <button onClick={AddTask}>Add Task</button>
      <hr />
      <h3>Task Todo</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone ? { textDecorationLine: "line-through" } : {}
                }
              >
                {todo.task}
              </span>
              &nbsp;
              <button onClick={() => deleteTask(todo.id)}>delete</button>
              &nbsp;&nbsp;
              <button onClick={() => upperCaseOne(todo.id)}>
                UpperCase One
              </button>
              &nbsp;&nbsp;
              <button onClick={() => markDone(todo.id)}>Mark Done</button>
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>&nbsp;&nbsp;
      <button onClick={markDoneAll}>Mark Done All</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default TodoApp;
