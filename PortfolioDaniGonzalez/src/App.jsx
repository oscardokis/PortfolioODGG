import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mouseActivate, setMouseActivate] = useState(false);
  const [position, setPosition] = useState({x:0, y:0})
  useEffect(() =>{
    const handleMove = (event) => {
      const {clientX, clientY} = event;
      console.log({clientX, clientY});
      setPosition({x:clientX, y:clientY});
    }

    if(mouseActivate){
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
        window.removeEventListener('pointermove', handleMove);
    }
  },[mouseActivate]);
  return (
    <main>
      <h1>Mouse Test</h1>
      <div 
      className='background-mouse' 
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}>

      </div>
      <button onClick={() => setMouseActivate(!mouseActivate)}>mouse background {mouseActivate ? "deactivated" : "activate"}</button>
    </main>
  )
}

export default App
