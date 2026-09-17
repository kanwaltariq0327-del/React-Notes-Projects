# React-Notes
=> " We use react in order to deal & maintain complex front-end "
- To inject JS code or variable inside our code we use: evaluated **expression** {JavaScript final outcome that has been evaluated} with curly parentheses.

# Components:
**=> " React components are the fundamental building blocks of a React application. "**
- They are independent, reusable bits of code that handle their own logic and appearance.
- They effectively act like JavaScript functions that return HTML-like markup called JSX.
- A React component can be as small as a single button or as large as an entire web page.

# JSX:
**=> " JSX is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside our React components."**
- JSX stands for **JavaScript XML**.
- Browsers cannot read JSX directly. Under the hood, build tools like Babel transpile JSX into standard JavaScript.
- Babel calls a function **React.createElement()** that produce plain JavaScript objects representing the virtual DOM.

# Props:
**=> " Props are a core mechanism used to pass data from a parent component to a child component. "**
- Props are short for *"properties"*.
- They make our components reusable, dynamic and configurable.
- Propa are like **arguments** passed to JavaScript functions .

# Hooks:
## What is a Hook?
=> **" A Hook is a special React function that lets a component use some React features. "**
- **Hooks let functional components remember data, react to changes, access DOM elements and share logic.**
- **Changing a normal variable doesn't tell React to render the component again but *Hooks* does.**

## When it is needed?
=> **" When updation in UI is needed then react introduces some built-in functions/methods which includes the usage of hooks. "**

## How to use hooks?
=> **" In order to use hooks we have to import it from React. "**
#### For Example:
-> ```import {useState, useEffect} from 'react'```


## 1- useState:

=> **useState** is used to store/change data in a component.
- **useState** declares a state variable that we can update directly.

#### Basic Syntax:
    const [state, setState] = useState(initialState)

#### Example Code:
    import { useState } from "react";

      function Counter() {

        const [count, setCount] = useState(0);
  
        return(
          <button onClick={() => setCount(count + 1)}>
            {count}
          </button>);
      }

## 2- useEffect:

=> **useEffect** is a React Hook that lets us synchronize a component with an external system.
- **useEffect** runs the code when something happens/changes.
- **useEffect** is used when we want React to perform some side effect.

#### For example:
   - Fetch data from an API
   - Change the document title
   - Set up a timer
   - Listen for an event
   - Subscribe/unsubscribe to something

#### Basic Syntax:
    useEffect(setup, dependencies?)


#### Example Code:
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
              connection.disconnect();
        };
    }, [serverUrl, roomId]);


## 3- useRef:

=> **useRef** lets us reference a value that’s not needed for rendering.
- **useRef** keeps a value without causing a re-render / access DOM

#### Basic Syntax:
    const ref = useRef(initialValue)

- Call useRef at the top level of the component to declare a ref.
#### Example Code:
    import { useRef } from 'react';

    function MyComponent() {
        const intervalRef = useRef(0);
        const inputRef = useRef(null);
        // ...
    }

## 4- useContext:
=> **useContext** allows a functional component to read and subscribe to shared data (context) without passing props through intermediate components.
- This eliminates a common problem known as "prop drilling".
- It is ideal for sharing global or app-wide configurations like:
   - user authentication status,
   - UI themes or
   - language preferences
- The Core Three Steps to Use Context:
   -  Create: ```createContext()``` Instantiates the global context container.
   -  Provide: ```<ThemeContext value={...}>``` Wraps parent components to supply the data down the tree.
   -   Consume: ```useContext(ThemeContext)``` Extracts the current value inside any descendant component.


#### Example Code:
#### 1st Step: Create a context:
    const UserContext = createContext();

#### 2nd Step: Provide the value:
    <UserContext.Provider value="Ali">
        <App />
    </UserContext.Provider>

#### 3rd Step: Another component can access it:
    const user = useContext(UserContext);


## 5- useCallback:
=> **useCallback** is a React Hook that lets us cache a function definition between re-renders.

#### Basic Syntax:
    const cachedFn = useCallback(fn, dependencies)

#### Example Code:
    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);


# Custom Hooks:
**=> " Custom Hooks are JavaScript functions that allow us to extract, reuse and share stateful logic between different functional components in React. "**
- Custom Hooks must begin with a lowercase *use* followed by a capital letter (e.g. useFetch, useConverter).
- Custom hooks are regular JavaScript functions but their specific quality is that they can call other React hooks **(like useState or useEffect)** inside them.
- Unlike regular functional components, hooks return data **(objects, arrays, strings, etc.)** rather than UI layout.











