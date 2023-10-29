import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

// componente criado aqui
const Post = ({ post }) => {
  console.log('Filho, renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.protoType = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};
// ...

/*------- Component -------*/
function App() {
  const [posts, setPosts] = useState([]);
  const [valor, setValor] = useState('');

  console.log('Pai, renderizou');

  // ComponentDidMount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts...</p>}
    </div>
  );
}

export default App;

// // Exemplo 1 ------------------------------------------------
// import p from 'prop-types';
// import './App.css';
// import React, { useCallback, useMemo, useState } from 'react';

// const Button = ({ incrementButton }) => {
//   console.log('Filho, renderizou');
//   return <button onClick={() => incrementButton(100)}>+</button>
// };

// Button.prototype = {
//   incrementButton: p.func,
// };

// /*------- Component -------*/
// function App() {
//   const [counter, setCounter] = useState(0);

//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   console.log('Pai, renderizou');

//   // useMemo
//   const btn = useMemo(() => {
//     return <Button incrementButton={incrementCounter} />;
//   }, [incrementCounter]);

//   return (
//     <div className="App">
//       <h1>Contador: {counter}</h1>
//       {btn}
//     </div>
//   );
// }

// export default App;
