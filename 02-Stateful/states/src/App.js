import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'Rodrigo Muniz'
    }
    // this.handleclick = this.handleclick.bind(this)
  }
  handleclick = () => {
    const {name} = this.state
    console.log(`${name} clicado`)
  }

  changeName = ()=>{
    this.setState({name: 'Jéssica'})
  }
  // handleclick(){
  //   const {name} = this.state
  //   console.log(`${name} clicado`)
  // }

  render(){
    const name = this.state.name
    return (
      <>
        <p onClick={this.handleclick}>{name}</p>
        <p onClick={this.changeName}>{this.state.name}</p>
      </>
    )
  }

}


export default App;
