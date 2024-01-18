import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <h1 className="header">待辦清單</h1>
      <ul className="list">
        {todos.length === 0 && "暫無事項"}
        {todos.map(todo => {
          return (
            <TodoItem 
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  );
}