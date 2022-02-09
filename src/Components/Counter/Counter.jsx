import { Component } from "react/cjs/react.development";

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      counter : 0
    }
  }

  addCounter = ()=>{
    const {counter} = this.state
    const add = counter+ 1
    this.setState({counter: add})
  }

  render(){
    return (
      <button onClick={this.addCounter}>{this.state.counter}</button>
    )
  }
}
export default Counter