import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'Rodrigo Muniz',
      counter: 0
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

  sumCounter = (event) =>{
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.pageX)
    const { counter } = this.state
    this.setState({counter: counter+1})

  }

  render(){
    const {name, counter} = this.state
    return (
      <>
        <p onClick={this.handleclick}>{name} </p>
        <p onClick={this.changeName}>{this.state.name}</p>
        <p onClick={this.sumCounter}>Contagem : { counter }</p>
      </>
    )
  }

}


export default App;
