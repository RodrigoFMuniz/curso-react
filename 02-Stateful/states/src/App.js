import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {

  }

  async handleUpdate(){
    console.log('ola')
  }

  componentDidMount(){
    this.handleUpdate()
  }
  
  componentDidUpdate(){
    console.log('atualizou após mudança')
  }
  
  componentWillUnmount(){
    console.log('limpo')
  }
  render(){
    return (
      <div className='App'>
      </div>
    )
  }
}


export default App;
