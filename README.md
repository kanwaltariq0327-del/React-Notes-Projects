# React-Notes
=> " We use react in order to deal & maintain complex front-end "
- To inject JS code or variable inside our code we use: evaluated **expression** {JavaScript final outcome that has been evaluated} with curly parentheses.

# Hooks:
## What is a Hook?
=> **" A Hook is a special React function that lets a component use some React features. "**
- **Hooks let functional components remember data, react to changes, access DOM elements and share logic.**

## When it is needed?
=> **" When updation in UI is needed then react introduces some built-in functions/methods which includes the usage of hooks. "**

## How to use hooks?
=> **" In order to use hooks we have to import it from React. "**
#### For Example:
-> ```import {useState, useEffect} from 'react'```

## 1- useState:
=> **useState** is used to store data.
#### Example Code:
```import { useState } from "react";```
```function Counter() {```
  ```const [count, setCount] = useState(0);```
```return(<button onClick={() => setCount(count + 1)}>{count}</button>);}```
