import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'



function App() { 

let [counter, setCounter] = useState(0);

const increase = () => {
  if(counter == 20) return;
  setCounter(counter+1)
}

const decrease = () => {
  if(counter == 0) return ;
  setCounter(counter-1);
}

let newArr = [1,2,3,4];

  return (
    <>
    <h1>My First Reacts Project</h1>
    <h2 className="text-3xl font-bold underline text-blue-500">Counter Value = {counter}</h2>
    <button className='bg-gray-600' onClick={increase}>Increase Value </button>
    <button className='bg-gray-600' onClick={decrease}>Decrease Value </button>
    <p>The counter is updated here also {counter}</p>
    <Card course="Html" arr= {newArr} btn="Explore more"/>
    <Card course="Css" arr= {newArr} btn="Start learning"/>
    <Card course="JavaScript" count={counter}/>
    </>
  )
}

export default App
