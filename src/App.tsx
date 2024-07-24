import { Col, Container, Row } from "react-bootstrap";
import Chat from "./Page/Chat/Index";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Chat />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
