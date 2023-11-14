import { Component } from 'react';
import './styles.css'
import {Posts} from '../../Components/Posts'
import {loadPosts} from '../../utils/data/load-posts'
import { Button } from '../../Components/Button';

// Class statefull component
class App extends Component{
  state={
    posts:[],
    allPosts:[],
    page:0,
    postsPerPage: 5
   }

   //Lifecycle method
   async componentDidMount(){
    await this.loadPosts()
   }

   loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({posts, page: nextPage})
   }

   //Fetching data
   loadPosts = async ()=>{
    const {page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts:postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
   }

   //Render page
  render(){
    const {posts} = this.state
    return (
      <section className='container'>
        <Posts posts={posts}/>
        <Button text="Load more posts"  onClickAttr = {this.loadMorePosts}/>
      </section>
    )
  }
}

export default App
