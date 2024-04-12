import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from 'react-bootstrap'; 

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello, tarefas</h1>
        </Col>
      </Row>
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
