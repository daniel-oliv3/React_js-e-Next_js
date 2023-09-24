import './App.css';
import { Component } from 'react';



//Componentes de classe
class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O que é React?',
        body: 'React é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
      },
      {
        id: 2,
        title: 'O que é Redux?',
        body: 'Redux é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
      },
      {
        id: 3,
        title: 'O que é React Native?',
        body: 'React Native é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
      },
    ]
  };

  timeoutUpdate = null;
  
  componentDidMount(){
    this.handleTimeout();
  }

  componentDidUpdate(){
    this.handleTimeout();  
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  
  //função
  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O Título mudou?';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1  });
    }, 1000);
  }



  render() {
    const { posts, counter } = this.state;
    
    return (
      <div className="App">
        <p>Contador: {counter}</p>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

}

export default App;










// Exemplo 2
// // Componentes de classe
// class App extends Component {
//   state = {
//     counter: 0,
//     posts: [
//       {
//         id: 1,
//         title: 'O que é React?',
//         body: 'React é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
//       },
//       {
//         id: 2,
//         title: 'O que é Redux?',
//         body: 'Redux é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
//       },
//       {
//         id: 3,
//         title: 'O que é React Native?',
//         body: 'React Native é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
//       },
//     ]
//   };

//   componentDidMount(){
//     const { posts, counter } = this.state;
//     posts[0].title = 'O Título mudou?';

//     setTimeout(() => {
//       this.setState({ posts, counter: counter + 1  });
//     }, 5000);
//   }
  
//   render() {
//     const { posts, counter } = this.state;
    
//     return (
//       <div className="App">
//         <p>Contador: {counter}</p>
//         {posts.map(post => (
//           <div key={post.id}>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }

// }

// export default App;




// Exemplo 1
// // Componentes de classe
// class App extends Component {
//   state = {
//     posts: []
//   };

//   // IA Sugestão -------------------------------------------
//   // componentDidMount() {
//   //   fetch('https://jsonplaceholder.typicode.com/posts')
//   //     .then(response => response.json())
//   //     .then(json => this.setState({ posts: json }));  
//   // }
//   //--------------------------------------------------------

//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({
//         posts: [
//           {
//             id: 1,
//             title: 'O que é React?',
//             body: 'React é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
//           },
//           {
//             id: 2,
//             title: 'O que é Redux?',
//             body: 'Redux é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
//           },
//           {
//             id: 3,
//             title: 'O que é React Native?',
//             body: 'React Native é uma biblioteca JavaScript que facilita a criação de interfaces de usuário'
//           },
//        ]
//       });
//     },5000);
//   }
  
//   render() {
//     const { posts } = this.state;
    
//     return (
//       <div className="App">
//         {posts.map(post => (
//           <div key={post.id}>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }

// }

// export default App;
