import './App.css';
import { useState } from 'react';


/*------- Component -------*/
function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">

      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>

    </div>
  );
}

export default App;


















