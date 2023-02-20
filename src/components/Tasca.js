import React from 'react';
import '../stylesheets/Tasca.css';
import { AiOutlineCloseCircle } from "react-icons/ai"; 

function Tasca({ id, text, completada, completarTasca, eliminarTasca }) {
  return (
    <div className={completada ? 'tasca-contenidor completada' : 'tasca-contenidor'}>
      <div 
        className='tasca-text'
        onClick={() => completarTasca(id)}>
        {text}
      </div>
      <div 
        className='tasca-contenidor-icones'
        onClick={() => eliminarTasca(id)}>
        <AiOutlineCloseCircle className='tasca-icona'/>
      </div>
    </div>
  )
}

export default Tasca;