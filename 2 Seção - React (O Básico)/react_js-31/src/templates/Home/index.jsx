import { useEffect, useState, useCallback } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(4);
  const [searchValue, setSearchValue] = useState('');
  
  const noMorePosts = page + postsPerPage >= allPosts.length;
  
  const filteredPost = !!searchValue
  ? posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  })
  : posts;

  
  

  const handlerLoadPosts = useCallback(async (page, postsPerPage) => {
    const postAndPhotos = await loadPosts();

    setPosts(postAndPhotos.slice(page, postsPerPage));
    setAllPosts(postAndPhotos);
  }, []);

  useEffect(() => {
    // console.log("Oi");
    console.log(new Date().toLocaleString('pt-br') );
    handlerLoadPosts(0, postsPerPage);
  }, [handlerLoadPosts, postsPerPage]);

  const loadMorePosts = () => {    
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    
    setPosts(posts);
    setPage(nextPage);
  };

  const handlerChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search Value: {searchValue} </h1>}
        <TextInput searchValue={searchValue} handlerChange={handlerChange} />
      </div>

      {filteredPost.length > 0 && <Posts posts={filteredPost} />}

      {filteredPost.length === 0 && <p>Não existem posts =( </p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load More Posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------

// //Componentes de classe
// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 4,
//     searchValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;

//     const postAndPhotos = await loadPosts();
//     this.setState({
//       posts: postAndPhotos.slice(page, postsPerPage),
//       allPosts: postAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { page, postsPerPage, allPosts, posts } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

//     posts.push(...nextPosts);
//     this.setState({ posts, page: nextPage });
//   };

//   /* ------- Funções ------- */
//   handlerChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPost = !!searchValue
//       ? posts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         <div className="search-container">
//           {!!searchValue && <h1>Search Value: {searchValue} </h1>}
//           <TextInput
//             searchValue={searchValue}
//             handlerChange={this.handlerChange}
//           />
//         </div>

//         {filteredPost.length > 0 && <Posts posts={filteredPost} />}

//         {filteredPost.length === 0 && <p>Não existem posts =( </p>}

//         <div className="button-container">
//           {!searchValue && (
//             <Button
//               text="Load More Posts"
//               onClick={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

// export default Home;
