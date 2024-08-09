import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';

import { NewItemForm } from './components/NewItemForm';
import { ToDoList } from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function addToDo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);
  }

  function toggleToDo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteToDo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  function editToDo(id, newTitle) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  }

  const calculateProgress = () => {
    if (todos.length === 0) return 0;

    const completedCount = todos.filter((todo) => todo.completed).length;
    return (completedCount / todos.length) * 100;
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="shadow-lg rounded vw-100 vh-90" style={{ maxWidth: '80%', maxHeight:'80%' }}>
        <CardBody className="m-3">
          <CardTitle className="mb-3" style={{ color: '#424242' }}>
            To-Do List
          </CardTitle>
          {todos.length > 0 && (
            <ProgressBar
              now={calculateProgress()}
              className="m-3 custom-progress-bar"
            />
          )}
          <NewItemForm onAddNew={addToDo} />
          <ToDoList
            todos={todos}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
