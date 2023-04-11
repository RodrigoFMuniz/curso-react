import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'Rodrigo Muniz'
    }
  }
  render(){
    const name = this.state.name
    return (
      <>
        <p>{name}</p>
        <p>{this.state.name}</p>
      </>
    )
  }
}


export default App;
