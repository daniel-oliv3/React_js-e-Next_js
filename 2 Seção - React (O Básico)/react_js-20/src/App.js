import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';




//Componentes de classe
class App extends Component {
  state = {
    posts: []    
  };

  
  componentDidMount(){
    this.loadPosts();
  }
  
  
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    
    const postAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
      
    });

    // this.setState({ posts: postsJson });
    this.setState({ posts: postAndPhotos });
  }


  componentDidUpdate(){
    
  }

  componentWillUnmount(){
    
  }


  render() {
    const { posts } = this.state;
    
    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id} 
              id={post.id} 
              title={post.title}
              body={post.body}
              cover={post.cover}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
