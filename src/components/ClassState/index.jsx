import React from 'react';
import { Loading } from '../Loading/loading';

const SEGURITY_CODE = 'paty'

class ClassState extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      error: false,
      loading: false,
      value:'',
    }
  }
  
  /*   handleComprobarError = () => {
    this.setState({error:!this.state.error})
  } */


  handleComprobar = () => {
    this.setState({loading: true})
  }

  OnChange = (e) => {
    this.setState({value: e.target.value})
  }

 componentDidUpdate(){
    console.log('actualizacion')
    if (this.state.loading) {
    setTimeout(() =>{
      if (this.state.value === SEGURITY_CODE) {
        this.setState({error: false, loading: false})
      }else {
        this.setState({ error: true, loading: false})
      }
    }, 3000);
  }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escriba el codigo de seguridad para eliminar </p>
        {this.state.loading && (
          <Loading />
        )}
        <input 
          placeholder='Codigo de seguridad' 
          value={this.state.value} 
          onChange={this.OnChange} 
        />
        <button onClick={this.handleComprobar}> Comprobar</button>
        {(this.state.error && !this.state.loading) && (
          <p>Error: el codigo es incorrecto</p>
        )}
      
      </div>
    );
  }
}

export { ClassState }
