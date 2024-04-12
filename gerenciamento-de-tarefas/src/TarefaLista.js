import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function TarefaLista({ tarefas }) {
    return (
        <Container className="p-3 rounded bg-warning">
        {tarefas.length === 0 ? (
          <p className="text-center">Nenhuma tarefa adicionada</p>
        ) : (
          <ListGroup className="text-center">
            {tarefas.map((tarefa, index) => (
              <ListGroup.Item key={index} className="mb-3 rounded">{tarefa}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Container>
    );
  }

export default TarefaLista;
