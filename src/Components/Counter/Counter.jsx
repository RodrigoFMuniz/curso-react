import { Component } from "react/cjs/react.development";

class Counter extends Component{
    state = {
        counter : 0,
        tituloInicial : '',
    }


  // componentDidMount(){
  // }
  // componentDidUpdate(){
  // }
  // componentWillUnmount(){
  // }
  addCounter = ()=>{
    const {counter} = this.state
    let add = counter+1
    this.setState({counter:add})
  }

  render(){
    const {counter} = this.state  
    return (
      <div>
        <button onClick={this.addCounter}> Clique aqui
        </button>
        <h1>{counter}</h1>
      </div>
    )
  }
}
export default Counter