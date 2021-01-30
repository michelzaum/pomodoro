import { useState } from 'react'

import './App.css';

const reset = () => {
  console.log('reset')
}

const stop = () => {
  console.log('stop')
  clearInterval()
}

function App() {
  let [minuto, setMinuto] = useState(25)
  let [segundo, setSegundo] = useState(0)

  function start() {
    let count = 0
    setInterval(() => {
      if (count === 0) {
        count = 60
        setSegundo(count)
        setMinuto(--minuto)
      }
      count--
      setSegundo(count)
      console.log(segundo)
    }, 1000)
  }

  return (
    <>
      <div className="time-container">
        <h1 className="time">{`${minuto}:${String(segundo).padStart(2, '0')}`}</h1>
        <p className="phrase">Mantenha o foco!</p>
      </div>

      <div className="buttons-container">
        <button className="button reset" onClick={() => reset()}>
          RESET
        </button>
        <button className="button start" onClick={() => start()}>
          START
        </button>
        <button className="button stop" onClick={() => stop()}>
          STOP
        </button>
      </div>

      <div className="time-divisions-container">
        <span className="time-division-item">
          Foco - 25 min
        </span>
        <span className="time-division-item">
          Break - 5 min
        </span>
        <span className="time-division-item">
          Long break - 10 min
        </span>
      </div>
    </>
  );
}

export default App;
