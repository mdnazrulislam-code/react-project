import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {


  let [counter, setCounter ] = useState(0)
  const addValue = ()=>{
    setCounter(counter +1)
  }

  const removevalue = ()=>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1> Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removevalue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}
