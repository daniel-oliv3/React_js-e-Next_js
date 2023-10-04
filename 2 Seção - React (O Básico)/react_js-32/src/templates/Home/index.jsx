import { Component } from "react";
import "./styles.css";


// -------------------------------------------------------------
export class Home extends Component {
  state = {
    counter: 0
  }

  // função
  handleClick = () => { 
    this.setState(
      (prevState, prevProps) =>{
        // console.log('PREV', prevState.counter);
        // console.log('PROPS: ', prevProps.numberToIncrement);
        // return { counter: prevState.counter + 1 } 
        return { counter: prevState.counter + prevProps.numberToIncrement }

      },
      () => {
        console.log('POST', this.state.counter);
      }
    );    
  }


  render(){
    return (
      <div className="container">
        <h1>Contador: {this.state.counter}</h1>
        <button onClick={this.handleClick}>Incrementar</button>
      </div>
    );
  }
}














// ---------------------------------------------------------------



// import { Component, useEffect, useState, useCallback } from "react";
// import { Posts } from "../../components/Posts";
// import { loadPosts } from "../../utils/load-posts";
// import { Button } from "../../components/Button";
// import { TextInput } from "../../components/TextInput";


// //Componentes de classe
// export class Home extends Component {
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




