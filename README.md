# Curso React
## Capitulo 1
### Entendendo conceitos básicos:
- Babel
- Webpack
- Build
- Componentes de class
    import { Component } from 'react/cjs/react.development';

    class App extends Component{
      render(){
        return <h1>Hello World!!!</h1>
      }
    }
    export default App
 - Componentes de função

    function App(){
      return(
        <div>
          <h1>
          Hello Again
          </h1>
        </div>
      )
    }
    export default App