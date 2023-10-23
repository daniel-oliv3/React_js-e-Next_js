// --------------------------------- Exemplo 2 ------------------------------
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*------- Component -------*/
function App() {
  const [reverse, setReverse] = useState(false);
  const [count, setCount] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCount(count + 1);
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

// --------------------------------- Exemplo 1 ------------------------------
// import { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// /*------- Component de classe -------*/
// class App extends Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.handleClick = this.handleClick.bind(this);

//   //   this.state = {
//   //     reverse: false,
//   //     // reverse: true,
//   //   };
//   // }

//   state = {
//     reverse: false,
//   };

//   // handleClick() {
//   //   const { reverse } = this.state;
//   //   this.setState({ reverse: !reverse });
//   // }

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
