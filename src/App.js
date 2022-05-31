import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import img from '../src/img/Без названия.png'
import image from '../src/img/Без названия (1).png'


function App() {

  const [count, setCount] = useState(img); 
  return (
    <div className="App">
      {/* <p>{count}</p>
      <button onClick={ () => setCount('Hello')}>
        hello
      </button>
      <button onClick={ () => setCount("Привет")}>
        Привет
      </button> */}
      <img className='all' src={count}/>
      <button  onClick={ () => setCount(img)}><img className='flag' src={img}/> </button>
      <button onClick={ () => setCount(image)} ><img className='gerb'  src={image}/></button>
      



    </div>
  );
}

export default App;
