import { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}

export const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add todo"
        className="border px-2 py-1 mr-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1">Add</button>
    </form>
  );
};
