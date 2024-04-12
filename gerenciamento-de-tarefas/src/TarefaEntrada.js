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
    if (!descricao.trim()) return; 
    onAdicionarTarefa(descricao);
    setDescricao(''); 
  };

  return (
    <Form onSubmit={handleSubmit}><br></br>
      <Form.Group as={Row} controlId="formDescricaoTarefa">
        <Col sm="20">
          <Row>
            <Col sm="20">
              <Form.Control
                type="text" className="text-center"
                placeholder="Digite a descrição de uma nova tarefa"
                value={descricao}
                onChange={handleInputChange}
              /> <br></br>
            </Col>
            <Col sm="20" className="d-flex align-items-center justify-content-center">
              <Button type="submit" className="w-100">Adicionar</Button>
            </Col>
          </Row>
        </Col>
      </Form.Group>
    </Form>
  );
}

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

export default TarefaEntrada;