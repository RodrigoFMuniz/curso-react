import { Component } from 'react';
import './App.css';

class App extends Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
    state = {
      counter: 0,
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
      ],
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

  handleUpdate(){
    const { data, counter} = this.state
    
    data[0].name = 'RODRIGO'
    setTimeout(()=>{
      this.setState({data, counter: counter+1})
    }, 3000)
  }
  componentDidMount(){
    this.handleUpdate()
  }
  render(){
    const { data, counter} = this.state
    return (
      <div className='App'>
        <p>{data[0].name}</p>
        <p>{counter}</p>
      </div>
    )
  }
}


export default App;
