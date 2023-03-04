import './App.css';
import {useState} from 'react'
import Upgrade from './components/Upgrade';
const App = () => {
  const [count, setCount]=useState(0);

  const [multiplier,setMultiplier]=useState(1);

  const updateCount=() => setCount(count+multiplier);
  const resetCount= () =>{setCount(0); setMultiplier(1)};

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count-10);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }
  
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier( multiplier * 10);
      setCount(count - 1000);
    }
  }
  
  return (
    <div className="App">
          <div className="header">
            <h1>Samosa Selector </h1>
            <h2>Count: {count}</h2>
            
            <img className="samosa" onClick={updateCount}
            src="https://t4.ftcdn.net/jpg/05/11/08/05/360_F_511080597_NvqjRdezlARSQHy4VpAKFvUVTEeGdlLy.jpg" alt="" />
            <br></br>
            <button onClick={resetCount}>Reset </button>
          </div>

        <div className='container'>
            <div className='upgrade'>
                <h3>Double Stuffed</h3>
                <p>2x per click!</p>
                <button onClick={buyDoubleStuffed}><b>Cost </b>10</button>
            </div>

            <div className='upgrade'>
                <h3>Party Pack</h3>
                <p>5x per click!</p>
                <button onClick={buyPartyPack}><b>Cost </b>100</button>
            </div>

            <div className='upgrade'>
                <h3>Full Feast</h3>
                <p>10x per click!</p>
                <button onClick={buyFullFeast}><b>Cost </b>1000</button>
            </div>

        </div>
    </div>
  )
}

export default App