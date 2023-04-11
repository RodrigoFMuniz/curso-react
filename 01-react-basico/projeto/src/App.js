import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  render(){
      return (
      <>
       <div className="App">
        <header className="App-header">
          <p>Este é um compenente de classe</p>
        </header>
      </div> 
    </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <p>Este é um compenente de função</p>
//       </header>
//     </div>
//   );
// }

export default App;
