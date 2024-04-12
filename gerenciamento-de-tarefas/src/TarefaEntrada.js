import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function TarefaEntrada({ onAdicionarTarefa }) {
  const [descricao, setDescricao] = useState('');

  const handleInputChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!descricao.trim()) return; // Evita adicionar tarefas vazias
    onAdicionarTarefa(descricao);
    setDescricao(''); // Limpa o campo de entrada após adicionar a tarefa
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formDescricaoTarefa">
        <Form.Label column sm="2">Descrição da Tarefa:</Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            placeholder="Digite a descrição da tarefa"
            value={descricao}
            onChange={handleInputChange}
          />
        </Col>
        <Col sm="2">
          <Button type="submit">Adicionar</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

function App() {
  const handleAdicionarTarefa = (descricao) => {
    console.log("Tarefa adicionada:", descricao); // Aqui você pode implementar a lógica para adicionar a tarefa ao estado do seu aplicativo
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

export default TarefaEntrada;