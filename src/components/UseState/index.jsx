import React, { useEffect, useState } from 'react';
import './Error.css'

const SEGURITY_CODE = 'erikita';


const UseState = ({name}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleComprobar = () =>{
    setLoading(true)
  } 

  const onChange = (e) => {
     setValue(e.target.value);
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        console.log('Validando')
        if (value !== SEGURITY_CODE) {
          setError(true);
          setLoading(false); 
        }else {
          setError(false);
          setLoading(false);
          
        }
        console.log('validado')
  
      }, 3000);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]); 

  return (
    <div>
      <h2>Eliminar {name} </h2>
      <p>Por favor, escriba el codigo de seguridad para eliminar </p>
      {loading && (
        <p>Cargando ...</p>
      )}
      <input onChange={onChange} value={value} placeholder='Codigo de seguridad' />
      <button type='button' onClick={handleComprobar}> Comprobar</button>
      {(error && !loading) && (
        <p className='Use-error'>Error: el codigo es incorrecto</p>
      )}
    </div>
  );
}
export { UseState };
 