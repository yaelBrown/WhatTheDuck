import logo from './logo.svg';
import { useEffect, useState } from "react"

import './App.css';

function App() {
  const getDuck = async () => {
    // const response = await fetch('https://www.placemonkeys.com/500/350?random')
    // const response = await fetch('https://catfact.ninja/fact')
    // const data = await response.json()
    // console.log(data)
  }

  useEffect(() => {
    // getDuck()
  }, [])
  
  const [duck, setDuck] = useState("")
  return (
    <div className="App">
      <br></br>
      <img src="https://www.placemonkeys.com/500/350?random" alt=""/>
      <h1>What the monkey!?</h1>
    </div>
  );
}

export default App;
