import {PostCard} from '../PostCard'

export const Posts = ({posts}) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard post={post} key={post.id} />
    ))}
  </div>
);

// export function Posts({posts}){
//   return(
//     <div className="posts">
//       {posts.map((post) => (
//         <PostCard post={post} key={post.id} />
//       ))}
//     </div>
//   )
//  }


// Geram erros


// function Posts({posts}){
//   return(
//     <div className="posts">
//       {posts.map((post) => (
//         <PostCard post={post} key={post.id} />
//       ))}
//     </div>
//   )
//  }
//   export default Posts