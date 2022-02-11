export const PostCard = ({post})=>{
  console.log(post.id)
  return (
    <div  className = "post-card">
      <img src={post.cover} alt="{post.title}" className='image'/>
      <h1>{post.id}- {post.title}</h1>
      <hr />
      <p>{post.body}</p>
   </div>
  )
}