

/*Arrow Function*/
export const PostCard = ({id, body, title, cover}) => {
  // const { post } = props;

  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};






// export default function PostCard() {
//     return (
//         <>
//             <div className="post">
//               <img src={post.cover} alt={post.title} />
//               <div key={post.id} className="post-content">
//                 <h1>{post.title}</h1>
//                 <p>{post.body}</p>
//               </div>
//             </div>
//         </>
//     )
// }
