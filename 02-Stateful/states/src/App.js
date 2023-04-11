 import { Component } from 'react';
import './App.css';

class App extends Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
    state = {
      data: [
        {
          id: 1,
          name: "Rodrigo",
          age: 36,
          alive: true
        },
        {
          id:2,
          name: "Jéssica",
          age: 29,
          alive: true
        },
        {
          id:3,
          name: "Cacau",
          age: 4,
          alive: true
        }
      ]
    }
  // this.handleclick = this.handleclick.bind(this)
  // }
  // handleclick = () => {
  //   const {name} = this.state
  //   console.log(`${name} clicado`)
  // }

  // changeName = ()=>{
  //   this.setState({name: 'Jéssica'})
  // }
  // handleclick(){
  //   const {name} = this.state
  //   console.log(`${name} clicado`)
  // }

  // sumCounter = (event) =>{
  //   console.log(event)
  //   console.log(event.type)
  //   console.log(event.target)
  //   console.log(event.pageX)
  //   const { counter } = this.state
  //   this.setState({counter: counter+1})
  // }
  // }

  componentDidMount(){
    console.log('oi')
  }
  render(){
    const {data} = this.state
    return (
      <div className='App'>
        {data.map((d) => 
          (
            <div key={d.id}> 
              <p >{d.name}</p> 
              <p >{d.age}</p>
            </div>
          )
        )}
        {/* <p onClick={this.handleclick}>{name} </p>
        <p onClick={this.changeName}>{this.state.name}</p>
      <p onClick={this.sumCounter}>Contagem : { counter }</p> */}
      </div>
    )
  }
}


export default App;
