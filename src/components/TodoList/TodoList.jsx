import { Todo } from "../Todo"
import { TodoFilters } from "../TodoFilters/TodoFilters"

const TodoList=({todos, handleSetComplete, handleDelete})=>{
    return(
<div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
{todos.map(todo =>{
    return(
        <Todo key= {todo.id} todo={todo}  handleDelete={handleDelete} handlSetComplete={handleSetComplete} />
    )
})}
<TodoFilters />
</div>
    )
}
export {TodoList}