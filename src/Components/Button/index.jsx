import { Component } from "react/cjs/react.development";

export class Button extends Component{
    render(){
        return (
            <button onClick={this.props.onClickAttr}>{this.props.text} </button>
        )
    }
}