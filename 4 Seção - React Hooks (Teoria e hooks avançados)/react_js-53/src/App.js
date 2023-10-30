import P from 'prop-types';
import { useEffect, useMemo, useState, useRef } from 'react';
import './App.css';

// componente criado aqui
const Post = ({ post, handleClick }) => {
  console.log('Filho, renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: P.func,
};
// ...

/*------- Component -------*/
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Pai, renderizou');

  // ComponentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
    console.log(contador.current);
  });

  // funcão
  const handlerClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Renderizou: {contador.current}x</h1>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handlerClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts...</p>}
    </div>
  );
}

export default App;

