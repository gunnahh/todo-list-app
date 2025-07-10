import { useTodos } from "../../context/TodoContext";
import { TodoForm } from "../presentational/TodoForm";

export const TodoFormContainer: React.FC = () => {
  const { addTodo } = useTodos();
  return <TodoForm onAdd={addTodo} />;
};
