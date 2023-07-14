import React, { useState } from 'react';
import { Title } from "./components/Title";
import { TodoInput } from "./components/Title/TodoInput";
import { Todo } from "./components/Todo";
import { TodoList } from "./components/TodoList";


function App() {
const [todos,setTodos] = useState([
  {
    id: 1,
    Title:'WATCH THE NEXT MARBEL MOVIES',
    completed: false,
  },
  {
    id: 2,
    Title:'WATCH THE NEXT MATCH TENNIS',
    completed: false,
  },
  {
    id: 3,
    Title:'WATCH TV IN THE HOTEL',
    completed: false,
  },
  {
    id: 4,
    Title:'WATCH THE ROCK AND ROLL CONCERT',
    completed: false,
  }

])


const addTodo=(title) =>{
const lastId = todos.length > 0 ? todos[todos.length - 1].id:1;
const newTodo ={
id:lastId + 1,
title,
completed:false
}
const todoList =[...todos]
todoList.push(newTodo);
setTodos(todoList);
}

  return (
    
     <div className="font-inter bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
    <div className="container flex flex-col max-w-xl">
    <Title />
    <TodoInput addTodo={addTodo} />
    <TodoList todos={todos}/>
    
   
   

    </div>
    </div>
  );
}

export default App;
