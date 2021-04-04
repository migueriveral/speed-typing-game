import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import Footer from "./Components/Footer"
import useWordGame from "./hooks/useWordGame"

function App() {
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useWordGame(30)

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef} 
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        onClick={startGame}
        disabled={isTimeRunning}
      >START</button>
      <h3>Word count: {wordCount}</h3>
      <Footer />
      
    </div>
  )
}

export default App
