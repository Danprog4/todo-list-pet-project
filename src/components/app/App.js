import { useState } from 'react';
import './App.css';
import Form from '../form/Form';
import Filter from '../filter/Filter-todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState('all');
  
  const putTodos = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    } else {
      alert('Write something')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      else {
        return {
          ...todo,
          done: !todo.done
        }
      } 
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => 
      todo.id !== id
    ))
  }

  const deleteAllTodos = () => {
    setTodos([]);
  }

  const completedTodos = () => {
    return todos.filter(todo => todo.done === true).length;
  }

  const filteredTodos = () => {
    if (filterType === 'completed') {
      return todos.filter(todo => todo.done);
    }
    return todos; 
  };

  return (
          <div className="wrapper">
            <div className="container">
              <header>
                <h1 className='title'>Todo List</h1>
              </header>
                <Form putTodos={putTodos} />
                <Filter filterType={filterType} setFilterType={setFilterType} />
              <ul className="todo-List">
                  {
                    filteredTodos().map(todo => {
                      return (
                        <li className={todo.done ? 'todo todo--active' : 'todo'} key={todo.id} onClick={() => toggleTodo(todo.id)}>
                          {todo.text} 
                        <img src='./delete img.png' alt='delete' className='delete-button' onClick={(e) => {
                          e.stopPropagation()
                          deleteTodo(todo.id)}} ></img>
                        </li>
                      )
                    })
                  }
              </ul>

              
              <div className="footer">
                <div className="todos-counter">
                  Total number of todos : {todos.length} 
                </div>
                <div className="todos-counter">
                  Total number of completed todos : {completedTodos()}
                </div>
                <footer>
                <button className="clean-button" onClick={() => deleteAllTodos()} >
                  Delete all
                </button>
                </footer>
              </div>
            </div>
          </div>
  );
}

export default App;
