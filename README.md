# Curso React
## Capitulo 1
### Entendendo conceitos básicos:
- Babel 
> **[![Babel](./utils/babel.png)](https://babeljs.io/)**
- Webpack
> **[![Webpack](./utils/Webpack.png)](https://webpack.js.org/)**
- Build
- Componentes de classe

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