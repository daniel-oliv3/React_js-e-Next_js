import logo from './logo.svg';
import './App.css';
import { Component } from 'react';




// Componentes de classe
class App extends Component {
  state = {
    name: 'Daniel Oliveira',
    counter: 0
  };

  // Arrow Function
  handlePClick = () => {
    this.setState({ name: 'Sapup3' })
  }
  
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  
  }
  

  render() {
    const { name, counter } = this.state;

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            Nome: {name}
            <br/>
            Contador: {counter}
          </p>
          <a onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este e o Link
          </a>
        </header>
      </div>
    );
  }

}





// // Componentes de classe
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.handlePClick = this.handlePClick.bind(this);

//     this.state = {
//       name: 'Daniel Oliveira',
//       counter: 0
//     };
//   }

//   handlePClick() {
//     this.setState({ name: 'Sapup3' })
//   }
  
//   handleAClick = (event) => {
//     event.preventDefault();
//     const { counter } = this.state;
//     this.setState({ counter: counter + 1 })
  
//   }
  

//   render() {
//     const { name, counter } = this.state;

    
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handlePClick}>
//             Nome: {name}
//             <br/>
//             Contador: {counter}
//           </p>
//           <a onClick={this.handleAClick}
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Este e o Link
//           </a>
//         </header>
//       </div>
//     );
//   }

// }


// // Componentes de classe
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.handlePClick = this.handlePClick.bind(this);

//     this.state = {
//       name: 'Daniel Oliveira',
//     };
//   }

//   handlePClick() {
//     this.setState({ name: 'Sapup3' })
//   }
  

//   render() {
//     const { name } = this.state;

    
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handlePClick}>
//             Nome: {name}
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }

// }




// // Componentes de classe
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.handlePClick = this.handlePClick.bind(this);

//     this.state = {
//       name: 'Daniel',
//       sobrename: 'Oliveira'
//     };
//   }

//   handlePClick() {
//     const { name } = this.state; 
//     console.log(`P click ${name}`);
//   }
  

//   render() {
//     const { name } = this.state;
//     const { sobrename } = this.state;

    
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handlePClick}>
//             Sapup3: {name} {sobrename}
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }

// }

export default App;
