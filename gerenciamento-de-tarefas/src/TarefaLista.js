import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function TarefaLista() {
    return (
      <Container className="p-3 rounded bg-warning">
        <ListGroup className="text-center">
          <ListGroup.Item className="p-3 rounded">Preparar aula de programação</ListGroup.Item><br></br>
          <ListGroup.Item className="p-3 rounded">Fazer feira</ListGroup.Item><br></br>
          <ListGroup.Item className="p-3 rounded">Preparar marmitas</ListGroup.Item><br></br>
        </ListGroup>
      </Container>
    );
  }

export default TarefaLista;
