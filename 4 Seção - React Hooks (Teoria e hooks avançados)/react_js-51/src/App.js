import { useEffect, useState } from 'react';
import './App.css';



/*------- Component -------*/
function App() {
  const [posts, setPosts] = useState([]);

  console.log('Pai, renderizou');

  // ComponentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
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

