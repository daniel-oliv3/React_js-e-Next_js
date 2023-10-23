import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*------- Component -------*/
function App() {
  const [reverse, setReverse] = useState(false);
  const [count, setCount] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  // ----------------------------
  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  // ----------------------------
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {count}</h1>

        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>

        <p>
          <button type="button" onClick={handleIncrement}>
            Incrementar {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;

