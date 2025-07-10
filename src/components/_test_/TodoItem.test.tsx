import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../presentational/TodoItem";
import { Todo } from "../../types/todo";

describe("TodoItem", () => {
  const mockTodo: Todo = {
    id: 1,
    title: "Test Todo",
    completed: false,
  };

  const mockOnDelete = jest.fn();
  const mockOnToggle = jest.fn();
  const mockOnEdit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders todo title", () => {
    render(
      <TodoItem
        todo={mockTodo}
        onDelete={mockOnDelete}
        onToggle={mockOnToggle}
        onEdit={mockOnEdit}
      />
    );
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

});
