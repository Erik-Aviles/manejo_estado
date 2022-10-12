import React from 'react';

class ClassState extends React.Component{
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escriba el codigo de seguridad para eliminar </p>
        <input placeholder='Codogo de seguridad' />
        <button> Comprobar</button>
      </div>
    );
  }
}

export { ClassState }
