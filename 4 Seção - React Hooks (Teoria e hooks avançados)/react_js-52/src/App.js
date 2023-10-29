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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
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

