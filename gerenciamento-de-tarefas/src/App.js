import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TarefaLista from './TarefaLista';
import TarefaEntrada from './TarefaEntrada';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const handleAdicionarTarefa = (descricao) => {
    setTarefas([...tarefas, descricao]);
  };

  return (
    <Container>
      <TarefaEntrada onAdicionarTarefa={handleAdicionarTarefa} />
      <TarefaLista tarefas={tarefas} />
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
