import { useState } from 'react'

import './App.css';

const reset = () => {
  console.log('reset')
}

const stop = () => {
  console.log('stop')
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
    }, 1000)
  }

  function setBreak() {
    setMinuto(5)
    setSegundo(0)
  }

  function setLongBreak() {
    setMinuto(10)
    setSegundo(0)
  }

  function setFocus() {
    setMinuto(25)
    setSegundo(0)
  }

  return (
    <>
      <div className="time-container">
        <h1 className="time">{`${String(minuto).padStart('2', 0)}:${String(segundo).padStart(2, '0')}`}</h1>
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
        <span className="time-division-item" onClick={() => setFocus()}>
          Foco - 25 min
        </span>
        <span className="time-division-item" onClick={() => setBreak()}>
          Break - 5 min
        </span>
        <span className="time-division-item" onClick={() => setLongBreak()}>
          Long break - 10 min
        </span>
      </div>
    </>
  );
}

export default App;
