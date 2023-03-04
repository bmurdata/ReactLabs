import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount]=useState(0);
  const [multiplier,setMultiplier]=useState(1);

  const updateCount=() => setCount(count+multiplier);
  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' onClick={updateCount} src='https://toppng.com/uploads/preview/our-famous-samosa-appetizer-will-blow-your-mind-samosa-11563152165nihahjf3sk.png'></img>
      </div>

    </div>
  )
}

export default App