import { TodoProvider, useTodos } from "./context/TodoContext";
import { TodoListContainer } from "./components/containers/TodoListContainer";
import { TodoFormContainer } from "./components/containers/TodoFormContainer";

const Content = () => {
  const { loading, error } = useTodos();
  return (
    <>
      <TodoFormContainer />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <TodoListContainer />
    </>
  );
};

const App: React.FC = () => (
  <TodoProvider>
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Todo List App</h1>
      <Content />
    </div>
  </TodoProvider>
);

export default App;
