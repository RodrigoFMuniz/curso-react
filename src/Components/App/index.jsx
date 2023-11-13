import { Component } from 'react';
import './App.css'
import {Posts} from '../Posts'
import {loadPosts} from '../../utils/data/load-posts'

// Class statefull component
class App extends Component{
  state={
    posts:[]
   }

   //Lifecycle method
   async componentDidMount(){
    await this.loadPosts()
   }

   //Fetching data
   loadPosts = async ()=>{
    const postsAndPhotos = await loadPosts()
    this.setState({posts:postsAndPhotos})
   }

   //Render page
  render(){
    const {posts} = this.state
    return (
     <Posts posts={posts}/>
    )
  }
}

export default App
