import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function NewItemForm({ onAddNew }) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === '') return;
    onAddNew(newItem);
    setNewItem('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="d-flex justify-content-center align-items-center mb-3 gap-1">
        <Col xs="auto" className="p-0 flex-grow-1">
          <Form.Group>
            <Form.Control
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs="auto" className="p-0">
          <Button
            variant="light"
            className="m-0"
            type="submit"
            style={{ background: '#EF9B0F', color: 'white' }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
