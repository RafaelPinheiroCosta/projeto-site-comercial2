import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [mensagemAPI, setMensagemAPI] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/exemplo')
      .then(response => {
        setMensagemAPI(response.data.mensagem);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  }, []);

  return (
    <div>
      <h1>{mensagemAPI}</h1>
    </div>
  );
}

export default App;
