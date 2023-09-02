import React, { useState } from 'react';
import TascaFormulari from './TascaFormulari';
import Tasca from './Tasca';
import '../stylesheets/LlistaDeTasques.css'

function LlistaDeTasques() {

  const [tasques, setTasques] = useState([]);

  const agregarTasca = tasca => {
    if (tasca.text.trim()) {
      tasca.text = tasca.text.trim();
      const tasquesActualitzades = [tasca, ...tasques]
      setTasques(tasquesActualitzades);
    }
  };

  const eliminarTasca = id => {
    const tasquesActualitzades = tasques.filter(tasca => tasca.id !== id);
    setTasques(tasquesActualitzades);
  };

  const completarTasca = id => {
    const tasquesActualitzades = tasques.map(tasca => {
      if (tasca.id === id) {
        tasca.completada = !tasca.completada;
      }
      return tasca;
    });
    setTasques(tasquesActualitzades)
  };
  
  return (
    <>
      <TascaFormulari onSubmit={agregarTasca} />
      <div className='tasques-llista-contenidor'>
        {
          tasques.map((tasca) => 
            <Tasca 
              key={tasca.id}
              id={tasca.id}
              text={tasca.text}
              completada={tasca.completada}
              eliminarTasca={eliminarTasca}
              completarTasca={completarTasca}
            />
          )
        }
      </div>
    </>
  );
}

export default LlistaDeTasques;