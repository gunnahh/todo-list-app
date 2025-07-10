import { useTodos } from "../../context/TodoContext";
import { TodoList } from "../presentational/TodoList";

export const TodoListContainer: React.FC = () => {
  const { todos, deleteTodo, toggleTodo, editTodo } = useTodos();
  return (
    <TodoList
      todos={todos}
      onDelete={deleteTodo}
      onToggle={toggleTodo}
      onEdit={editTodo}
    />
  );
};
