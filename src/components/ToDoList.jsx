import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { ToDoItem } from './ToDoItem';

export function ToDoList({ todos, toggleToDo, deleteToDo, editToDo }) {
  return (
    <Row>
      <ListGroup className="p-0" as="ul">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            {...todo}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        ))}
      </ListGroup>
    </Row>
  );
}
