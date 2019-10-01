import React, { useState } from 'react';

const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState('');

  const handleInputChange = event => {
    setTask(event.target.value);
  };

  const handleSubmit = event => {
    if (task) {
      // add task to to-dos using .concat add the task to existing todos in state:
      setTodos(todos.concat({id: uuid(), task, complete: false}));
    }
    // reset/clear input field:
    setTask('');
    event.preventDefault();
  };

  const handleTodoCheckboxChange = id => {
    // set Todos to a new array changing only the complete property of the todo matching the input id:
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo
        }
      })
    );
  };


  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.complete}
                onChange={handleTodoCheckboxChange}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <input type='text' value={task} onChange={() => handleInputChange(todo.id)} />
    </div>
  );
};

export default App;