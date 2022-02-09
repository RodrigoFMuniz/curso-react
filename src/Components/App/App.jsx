import { Component } from 'react/cjs/react.development';
import './App.css'

// Componente de class stateless
class App extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)//bind(this) insere o contexto de this para dentro da função handleClick, Desta maneira permitindo o acesso da função aos objetos da classe. Para sobrepor este comportamento, use Arrow functions '()=>{}'
    this.state = {
      name: 'Rodrigo',
      surname: "Muniz"
    };
  }
  handleClick(){
    //forma antiga
    // const {name,surname} = this.state
    // console.log(`Clicado ${name}  ${surname}`)

    //Forma nova, com uso de setState
    this.setState({name:"Rodrigo",surname:"Fernandes Muniz"})
  }

  render(){
    const {name,surname} = this.state
    return (
      <h1 onClick={this.handleClick}>Hello, {name} {surname}!!!</h1>
    )
  }
}

// Componente de função stateless
// function App(){
//   return(
//     <div>
//       <h1>
//       Hello Again
//       </h1>
//     </div>
//   )
// }
export default App
