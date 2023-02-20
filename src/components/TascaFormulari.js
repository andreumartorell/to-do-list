import React, { useState } from 'react';
import '../stylesheets/TascaFormulari.css'
import {v4 as uuidv4} from 'uuid';

function TascaFormulari(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    const tascaNova = {
      id: uuidv4(),
      text: input,
      completada: false
    };
    props.onSubmit(tascaNova)
  };

  return (
    <form 
      className='tasca-formulari'
      onSubmit={manejarEnvio}>
      <input 
        className='tasca-input'
        type='text'
        placeholder='Escriu una tasca'
        name='text'
        onChange={manejarCambio}
      />

      <button className='tasca-boto'>
        Agregar tasca
      </button>

    </form>
  )
}

export default TascaFormulari;