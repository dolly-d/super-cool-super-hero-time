import logo from './logo.svg';
import {React, useState} from 'react'
import './App.css';



function App() {
  let [count, setCount] = useState(0)

  return (
    <div className='App'>
    <p> Hello </p>
  <p>{count}</p>

    <button onClick={()=>setCount(count + 1)}> 1 </button>
    <button onClick={()=>setCount(count - 1)}> 2 </button>
    <button onClick={()=>setCount(count = 0)}> 3 </button>    
    </div>
  )
  
}

export default App;
