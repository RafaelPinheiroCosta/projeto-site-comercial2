import React, { useEffect, useState } from 'react';
import { getObjetos } from './services/objetos';

function App() {
  const [objetosAPI, setObjetosAPI] = useState([]);

  useEffect(() => {
    fetchObjetos()
  }, []);

  async function fetchObjetos() {

    const response = await getObjetos
    setObjetosAPI(response)
  }

  return (
    <div>

      <h1>teste2

      {
        objetosAPI.map(objeto => (

          <h1>{objeto.nome}</h1>

        ))
      }
      </h1>
    </div>
  );
}

export default App;
