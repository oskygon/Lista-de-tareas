
import React, { useState } from 'react';
import { Title } from "./components/Title";
import { TodoInput } from "./components/Title/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

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
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  const handleClearCompleted = () => {
    const completedTodos = todos.filter((todo) => !todo.completed);
    setTodos(completedTodos);
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

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

        <button
          onClick={handleClearCompleted}
          className="mt-4 px-4 py-4 text-sm bg-gray-600 text-white w-full   rounded-xl  "
        >
          Borrar Completadas

        </button>
        <div className=" text-xs mt-1 font-inter bg-gray-900  text-gray-100 flex items-center justify-center py-2 px-2">
          <span>Total: {totalTodos}</span>
          <span className="ml-4">Completadas: {completedTodos}</span>
          <span className="ml-4">Activas: {activeTodos}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
