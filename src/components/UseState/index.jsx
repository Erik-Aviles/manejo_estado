import React, { useEffect, useState } from 'react';
import './Error.css'

const SEGURITY_CODE = 'erikita';


const UseState = ({name}) => {

  const [state, setState] = useState({
    value:'',
    loading: false,
    error: false,
    deleted: false,
    confirmed: false,

  })

  const handleComprobar = () =>{
    setState({
      ...state, 
      loading: true
    })
  } 

  const onChange = (e) => {
    setState({
      ...state, 
      value: e.target.value
    });
  }

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        console.log('Validando')
        if (state.value === SEGURITY_CODE) {
          setState({
            ...state, 
            error: false,
            loading: false, 
            confirmed: true
          });
        }else {
          setState({
            ...state, 
            error: true, 
            loading: false,
          });         
        }
        console.log('validado')
  
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]); 


  // Ejemplo de estado declarativo con muchas pantallas :)
  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name} </h2>
        <p>Por favor, escriba el codigo de seguridad para eliminar </p>
        {state.loading && (
          <p>Cargando ...</p>
        )}
        <input 
          onChange={onChange} 
          value={state.value} 
          placeholder='Codigo de seguridad'
        />
        <button 
          type='button' 
          onClick={handleComprobar}
          > Comprobar
        </button>
  
        {(state.error && !state.loading) && (
          <p className='Use-error'>Error: el codigo es incorrecto</p>
        )}
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <div>
          <h2>Eliminar {name} </h2>
          <p>Seguro que quieres eliminar {name}</p>
          <button
            onClick={() => {
              setState({...state, 
                confirmed: true, 
                deleted: true
              })
            }}>Si, Eliminar</button>
          <button
            onClick={() => {
             setState({
              ...state, 
              confirmed: false, 
              value:''
            })
            }}>No, volver</button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <div>
        <h2>{name} fue eliminado</h2>
        <button
         onClick={()=>{
          setState({
            ...state,
            confirmed: false, 
            deleted:false,
            value:''
          })
         }}>Recuperar {name}</button>
      </div>
      </React.Fragment>
    );
  }
}

export { UseState };
 