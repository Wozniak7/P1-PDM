import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TarefaEntrada from './TarefaEntrada';

function App() {
  const handleAdicionarTarefa = (descricao) => {
    console.log("Tarefa adicionada:", descricao); 
  };

  return (
    <Container>
      <TarefaEntrada onAdicionarTarefa={handleAdicionarTarefa} />
    </Container>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


export default App;
