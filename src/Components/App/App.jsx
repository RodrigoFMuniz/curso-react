import { Component } from 'react';
import './App.css'
import {PostCard} from '../PostCard'

// Class statefull component
class App extends Component{
  state={
    posts:[]
   }

   //Lifecycle method
   componentDidMount(){
    this.loadPosts()
   }

   //Fetching data
   loadPosts = async ()=>{
    const postsPromisse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosPromisse= fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsPromisse,photosPromisse])
    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((post,ind)=>{
      return {...post,cover:photosJson[ind].url}
    })
    this.setState({posts:postsAndPhotos})
   }

   //Render page
  render(){
    const {posts} = this.state
    return (
     <div className='posts'>
       {posts.map((post)=>(
         <PostCard post={post} key={post.id}/>
       ))}
     </div>
    )
  }
}

export default App
