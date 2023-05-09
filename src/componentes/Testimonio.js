import React from 'react';
import '../stylesheets/Testimonio.css';

//export

//Aquí creamos el componente
function Testimonio(props) {
  return (
    //un elemento funcional nos va a retornar JSX
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}.png`)}
        alt='foto de emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;