import React, { useState } from 'react';
import { Title } from "./components/Title";
import { TodoInput } from "./components/Title/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };
    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedList);

    // Move the todo to the completedTodos list
    const completedTodo = updatedList.find(todo => todo.id === id);
    if (completedTodo && completedTodo.completed) {
      setCompletedTodos(prevCompletedTodos => [...prevCompletedTodos, completedTodo]);
    }
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  const handleClearCompleted = () => {
    const remainingTodos = todos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
  };

  const totalTodos = todos.length;
  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="font-inter bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
        />

        <div className="flex items-center justify-center mt-4 space-x-2">
          <button
            onClick={handleClearCompleted}
            className="px-4 py-2 text-sm text-white rounded-xl"
          >
            Borrar Completadas
          </button>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="px-4 py-2 text-sm text-white rounded-xl"
          >
            {showHistory ? 'Ocultar Historial' : 'Mostrar Historial'}
          </button>
        </div>

        {showHistory && (
          <div className="mt-4">
            <h2 className="text-center text-xl font-bold mb-2">Tareas Completadas</h2>
            <ul className="text-gray-300">
              {completedTodos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-xs mt-1 font-inter bg-gray-900 text-gray-100 flex items-center justify-center py-2 px-2">
          <span>Total: {totalTodos}</span>
          <span className="ml-4">Activas: {activeTodos}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

