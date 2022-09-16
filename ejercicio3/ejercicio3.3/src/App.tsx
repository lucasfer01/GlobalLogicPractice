import React, { ReactPropTypes } from "react";
import "./App.css";

let flag = false;

class App extends React.Component {
  flag = !flag;
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor

  // Para manejo de props, crear el estado y bindear metodos
    constructor(props: ReactPropTypes) {
      console.log('Constructor');
      
      super(props); // Sin el super this.props es undefined

      // Se crea el estado
        console.log('Contructor - Creando estado inicial');
        
        this.state = false;

      // Bind de metodos
        console.log('Constructor - Bindeo de metodos');
        
        this.toggleState = this.toggleState.bind(this);
    }

  // Metodos
    toggleState() {
      this.setState(prevState => !prevState);
    }

  // Apenas se renderice el componente
    componentDidMount(): void {
      console.log('ComponentDidMount');

      // Suscripciones

      // Fetch data

      // Seteo del estado con la data recibida
        console.log('ComponentDidMount - Actualizando el estado');
        
        this.toggleState(); // Para activar el ComponentDidUpdate()     
    }

  // Si hubo algun cambio en el componente
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): void {
      console.log('ComponentDidUpdate');

      // Verificar props y/o estado
        console.log('ComponentDidUpdate - Comparando el estado');

        if(prevState !== this.state) {
          // Que hacer en caso de que la comparación sea TRUE
            return console.log('ComponentDidUpdate - El estado cambió');

        } else {
          // La comparación es FALSE
            console.log('ComponentDidUpdate - El estado no cambió');
        }
    }

  // Antes de que el componente se desmonte
    componentWillUnmount(): void {
      console.log('ComponentWillUnmount');

      // Destruir lo necesario para no perder rendimiento de forma innesesaria
        console.log('ComponentWillUnmount - Cleanup');
      
        console.log('El componente se desmontó');
    }  

  // Mostrar en pantalla
    render() {
      console.log('Render');

      return <div className="App"></div>;
    }
}

export default App;
