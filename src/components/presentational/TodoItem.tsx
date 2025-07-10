import { Todo } from "../../types/todo";
import { useState } from "react";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleEdit = () => {
    onEdit(todo.id, title);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
          aria-label="toggle-todo"
        />
        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-2 py-1"
            aria-label="edit-input"
          />
        ) : (
          <span className={todo.completed ? "line-through text-green-500" : ""}>{todo.title}</span>
        )}
      </div>
      <div className="space-x-2 min-w-[100px] text-right">
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-600">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-600">Edit</button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-red-600">Delete</button>
      </div>
    </li>
  );
};
