# React-Notes
=> " We use react in order to deal & maintain complex front-end "
- To inject JS code or variable inside our code we use: evaluated **expression** {JavaScript final outcome that has been evaluated} with curly parentheses.

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
=> **useState** is used to store data.
- useState declares a state variable that we can update directly.

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
=> **useEffect** is a React Hook that lets us synchronize a component with an external system..
- **useEffect** is used when we want React to perform some side effect.
- **For example:**
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


## 6- useCallback:
=> **useCallback** is a React Hook that lets us cache a function definition between re-renders.

#### Basic Syntax:
    const cachedFn = useCallback(fn, dependencies)

#### Example Code:
    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);












