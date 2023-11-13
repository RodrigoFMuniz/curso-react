import { Component } from 'react';
import './App.css';

class App extends Component{
  state = { text:'olá' }

  async handleUpdate(){
    console.log('ola')
  }

  componentDidMount(){
    //this.handleUpdate()
    console.log('Component did mount')
  }
  
  componentDidUpdate(prevProps, prevState){
    console.log('Component did update')
  }
  
  componentWillUnmount(){
    console.log('Component will mount')
  }
  render(){
    return (
      <div className='App'>
      {this.text}
      </div>
    )
  }
}


export default App;
