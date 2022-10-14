import React, { useEffect, useReducer} from 'react'

const SEGURITY_CODE = 'erikita';

const UseReducer = ({name}) => {
  const [state, dispatch] = useReducer(reducer, initialState );

  const onCheck = () => dispatch({type: actionType.CHECK})
  const onConfirm = () => dispatch({type: actionType.CONFIRM})
  const onError = () => dispatch({type: actionType.ERROR}) 
  const onDelete = () => dispatch({type: actionType.DELETE})
  const onRestore = () => dispatch({type: actionType.RESTORE})
  const onChange = (e) => dispatch({type: actionType.CHANGE, payload: e.target.value})

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        console.log('Validando')
        if (state.value === SEGURITY_CODE) {
          onConfirm()
        }else {
          onError()      
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
          onClick={onCheck}> 
          Comprobar
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
          <button onClick={onDelete}>
              Si, Eliminar
          </button>
          <button onClick={onRestore}>
            No, volver
          </button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <div>
        <h2>{name} fue eliminado</h2>
        <button onClick={onRestore}>
            Recuperar {name}
        </button>
      </div>
      </React.Fragment>
    );
  }
}

const initialState = {
	value: '',
	loading: false,
	error: false,
	deleted: false,
	confirmed: false,
}

const actionType = {
  ERROR: 'ERROR',
  CONFIRM: 'CONFIRM',
  CHANGE: 'CHANGE',
  CHECK: 'CHECK',
  DELETE: 'DELETE',
  RESTORE: 'RESTORE'  
}
const reducerObject = (state, payload) => ({

	[actionType.ERROR]: {
    ...state, 
    error: true, 
    loading: false,
	},
	[actionType.CONFIRM]: {
    ...state, 
    error: false,
    loading: false, 
    confirmed: true
  },
  [actionType.CHANGE]: {
    ...state, 
    value: payload
	}, 
	[actionType.CHECK]: {
    ...state,
    loading: true,
    error: false,
  },
	[actionType.DELETE]: {
    ...state, 
    confirmed: true, 
    deleted: true
  },
	[actionType.RESTORE]: {
    ...state,
    confirmed: false, 
    deleted:false,
    value:''
  }
})

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
