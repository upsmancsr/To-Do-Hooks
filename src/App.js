import React, { useState, useReducer } from 'react';
import uuid from 'uuid/v4';

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

// reducer functions receive the current state and an action as arguments
// and return a new state based on the action type:

// todoReducer, taking todos array as the state argument:
const todoReducer = (state, action) => {
  switch (action.type) {
    // change todo complete to true:
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true }
        } else {
          return todo;
        }
      });
    // change todo complete to false:
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false }
        } else {
          return todo;
        }
      });
    // create a new todo:
    case 'ADD_TODO':
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false
      });
    // if action.type is none of the above, throw error by default
    default:
      throw new Error();
  }
}
// filterReducer:
const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETE':
      return 'COMPLETE';
    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE';
    default:
      throw new Error();
  }
};

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState('');
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');

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

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL'});
  };
  const handleShowComplete = () => {
    dispatchFilter({ type: 'SHOW_COMPLETE'});
  };
  const handleShowIncomplete = () => {
    dispatchFilter({ type: 'SHOW_INCOMPLETE'});
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true
    }
    return false;
  });

  return (
    <div>
      <div>
        <button type="button" onClick={handleShowAll}>
          Show All
        </button>
        <button type="button" onClick={handleShowComplete}>
          Show Complete
        </button>
        <button type="button" onClick={handleShowIncomplete}>
          Show Incomplete
        </button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.complete}
                onChange={() => handleTodoCheckboxChange(todo.id)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <input type='text' value={task} onChange={handleInputChange} />
    </div>
  );
};

export default App;