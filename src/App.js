import './App.css';

function App() {
  return (
    <>
      <div className="time-container">
        <h1 className="time">21:43</h1>
        <p className="phrase">Mantenha o foco!</p>
      </div>

      <div className="buttons-container">
        <button className="button reset">
          RESET
        </button>
        <button className="button start">
          START
        </button>
        <button className="button stop">
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
