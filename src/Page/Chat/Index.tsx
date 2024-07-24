import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./chat.scss";

export default function Chat() {
  const [messages, setMessage] = useState<any>([]);

  const handleSendMessage = () => {
    setMessage([{ sender: "Eu", content: Math.random() }]);
  };

  return (
    <div className="chat-container">
      <Card>
        <Card.Header as="h5">Chat</Card.Header>
        <Card.Body className="chat-messages">
          {messages.length > 0 &&
            messages.map((message: any) => (
              <p>
                {message.sender}: {message.content}
              </p>
            ))}
        </Card.Body>
        <Card.Footer className="chat-footer">
          <div className={"form-group"}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control size={"lg"} as="textarea" rows={1} />
            </Form.Group>
          </div>

          <Button variant="primary" size={"sm"} onClick={handleSendMessage}>
            Enviar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
