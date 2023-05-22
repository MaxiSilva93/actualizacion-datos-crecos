import React, { useState } from 'react';
import './App.css';

function App() {
  const [cedula, setCedula] = useState('');
  const [respuesta, setRespuesta] = useState(null); // Variable para almacenar la respuesta del POST

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', { cedula });

    const data = {
      cedula
    }

    fetch('https://www.desarrollocrecoscorp.com/admin-ecommerce-app/validar-cedula', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      setRespuesta(data);
    })
    .catch(error => {
      console.error('Error al hacer la petición:', error);
    })
  };

  return (
    <div className="App">
      <h2>Confirma y actualiza tus datos</h2>
      <form>
        <div>
          <input className='form-control col-md-9 cedula' type="number" value={cedula} onChange={(e) => setCedula(e.target.value)} placeholder = "Ingresar Cédula/RUC"/>
        </div>
        <button type="submit" className="btn boton-enviar" onClick={handleSubmit}>Continuar</button>
      </form>
      <a href="" target="_blank" className="fw-bolder">Revisar términos y condiciones</a>
    </div>
  );

  {respuesta && (
    <div className="respuesta">
      <h3>Respuesta del servidor:</h3>
      <p>{JSON.stringify(respuesta)}</p>
    </div>
  )}
}

export default App;