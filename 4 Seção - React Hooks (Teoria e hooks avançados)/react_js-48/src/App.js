import './App.css';
import { useState, useEffect } from 'react';


const eventFn = () => {
  console.log('h1 clicado...');
};

/*------- Component -------*/
function App() {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // ComponentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //ComponentWillUnmount - Limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // ComponentDidMount - Com dependência, executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">

      <p>Teste 2</p>

      <h1>Contador: {counter}</h1>
      <h1>Contador2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>

    </div>
  );
}

export default App;



















//------------ Exemplo 1 --------------------------------------------

// import './App.css';
// import { useState, useEffect } from 'react';

// /*------- Component -------*/
// function App() {

//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   // // ComponentDidUpdate - executa toda vez que o component aatualiza
//   // useEffect(() => {
//   //   console.log('ComponentDidUpdate');
//   // });

//   // // ComponentDidMount - executa 1x
//   // useEffect(() => {
//   //   console.log('ComponentDidMount');
//   // }, []);

//   // // ComponentDidMount - Com dependência, executa toda vez que a dependência mudar
//   // useEffect(() => {
//   //   console.log('Contador mudou para', counter);
//   // }, [counter]); // <-- dependência

//   // ComponentDidMount - Com dependência, executa toda vez que a dependência mudar
//   useEffect(() => {
//     console.log('C1:', counter, 'C2:', counter2);
//   }, [counter, counter2]);

//   return (
//     <div className="App">

//       <h1>Contador: {counter}</h1>
//       <h1>Contador2: {counter2}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>

//     </div>
//   );
// }

// export default App;

