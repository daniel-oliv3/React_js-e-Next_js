import p from 'prop-types';
import './App.css';
import React, { useCallback, useMemo, useState } from 'react';


const Button = ({ incrementButton }) => {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>
};

Button.prototype = {
  incrementButton: p.func,
};


/*------- Component -------*/
function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      {useMemo(() => {
        return <Button incrementButton={incrementCounter} />;
      }, [incrementCounter])}
    </div>
  );
}

export default App;

