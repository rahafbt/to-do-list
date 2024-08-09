import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export function ToDoItem({ id, title, completed, toggleToDo, deleteToDo, editToDo }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    if (newTitle.trim() !== title.trim()) {
      editToDo(id, newTitle.trim());
    }
    setEditing(false);
  };

  return (
    <ListGroup.Item as="li">
      {!editing ? (
        <Row className="m-1 w-100 d-flex justify-content-between align-items-center">
          <Col xs="auto" className="p-0">
            <Form.Check
              className="custom-checkbox flex-grow-1 text-break"
              label={title}
              checked={completed}
              onChange={(e) => toggleToDo(id, e.target.checked)}
            />
          </Col>
          <Col xs="auto" className="p-0">
            <Button
              variant="light"
              className="fa fa-edit"
              style={{ background: 'none', color: '#424242', border: 'none' }}
              onClick={() => setEditing(true)}
            />
            <Button
              variant="light"
              className="fa fa-trash"
              style={{ background: 'none', color: '#424242', border: 'none' }}
              onClick={() => deleteToDo(id)}
            />
          </Col>
        </Row>
      ) : (
        <Row className="m-1 w-100 d-flex justify-content-between align-items-center gap-1">
          <Col xs="auto" className="p-0 flex-grow-1">
            <Form.Control
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Col>
          <Col xs="auto" className="p-0">
            <Button
              variant="light"
              className="m-0"
              type="submit"
              style={{ background: '#EF9B0F', color: 'white' }}
              onClick={handleEdit}
            >
              Save
            </Button>
          </Col>
          <Col xs="auto" className="p-0">
            <Button
              variant="light"
              className="m-0 ml-2"
              type="submit"
              style={{ background: '#424242', color: 'white' }}
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      )}
    </ListGroup.Item>
  );
}
