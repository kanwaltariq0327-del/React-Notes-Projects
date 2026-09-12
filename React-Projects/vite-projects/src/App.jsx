import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const incValue = () => {
    setCount(count + 1);
  }

  const resetValue = () => {
    setCount(count = 0);
  }
  const decValue = () => {
    count > 0 ? setCount(count - 1): setCount(count = 0);
  }

  return (
    <div className='counter'>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <div className='btns'>
        <button onClick={incValue}>Increase +</button>
        <button onClick={resetValue}>Reset</button>
        <button onClick={decValue}>Decrease -</button>
      </div>
    </div>
  )
}

export default App
