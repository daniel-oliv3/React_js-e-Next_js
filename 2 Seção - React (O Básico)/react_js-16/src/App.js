import './App.css';
import { Component } from 'react';


// Componentes de classe
class App extends Component {
  state = {
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
      }
    ]
  };
  
  render() {
    const { posts } = this.state;
    
    return (
      <div className="App">
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















// ---- retornando elementos ind
// // Componentes de classe
// class App extends Component {
//   state = {
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
//       }
//     ]
//   };
  

//   render() {
//     const { posts } = this.state;

    
//     return (
//       <div className="App">
//         {posts.map(post => <h1 key={post.id}>{post.title}</h1>)}
//         {posts.map(post => <p key={post.id}>{post.body}</p>)}
//       </div>
//     );
//   }

// }

// export default App;
