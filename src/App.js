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
  // Define variable to store in state, as well as the methods to update their values:
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [task, setTask] = useState('');
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');

  const handleInputChange = event => {
    setTask(event.target.value);
  };

  const handleSubmit = event => {
    // if a task is currently stored in state, dipatch ADD_TODO action:
    if (task) {
      dispatchTodos({ type: 'ADD_TODO', task, id: uuid() })
    }
    // reset/clear input field:
    setTask('');
    event.preventDefault();
  };

  const handleTodoCheckboxChange = todo => {
    // Use useReducer via dispatchTodos. Set payload 'type' to opposite of current todo 'complete' status:
    dispatchTodos({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id
    });

    // *** alt method with useState
    // NOTE: handleTodoCheckboxChange takes todo id as arg instead of todo.
    // set Todos to a new array changing only the 'complete' property of the todo matching the input id:
    // setTodos(
    //   todos.map(todo => {
    //     if (todo.id === id) {
    //       return { ...todo, complete: !todo.complete };
    //     } else {
    //       return todo
    //     }
    //   })
    // );
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
    // 'filter' variable below is stored in state
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
                onChange={() => handleTodoCheckboxChange(todo)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={task} 
          onChange={handleInputChange} 
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default App;