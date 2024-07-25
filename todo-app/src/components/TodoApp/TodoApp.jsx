import { useState } from "react";
import { v4 as generatUniqueId } from "uuid";
import TodoList from "../TodoList/TodoList";

const INITIAL_STAGE = [
  {
    id: generatUniqueId(),
    task: "Word on Assignment",
    isCompleted: false,
    dateTime: Date.now(),
  },
];
const TodoApp = () => {
  const [allTodo, setAllTodo] = useState(INITIAL_STAGE);
  const [todo, setTodo] = useState("");

  const addToodo = () => {
    if (todo === "") return;
    setAllTodo([
      ...allTodo,
      {
        id: generatUniqueId(),
        task: todo,
        isCompleted: false,
        dateTime: Date.now(),
      },
    ]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const filteredTodos = allTodo.filter((todo) => {
      return todo.id !== id;
    });

    setAllTodo(filteredTodos);
  };

  const renderTodoList = () =>
    allTodo.map((todo) => (
      <TodoList
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleIsCompletedFn={toggleIsCompleted}
      />
    ));

  // 1 2 3 4 5
  // 3
  return (
    <div className="w-[700px] text-center mx-auto border-2 border-black py-8">
      <h1 className="text-4xl text-white text-center mb-4 font-bold text-gray-700">
        Todo App
      </h1>
      <div className="mb-4">
        <input
          type="text"
          value={todo}
          placeholder="Add Todo"
          className="px-4 py-2 border border-gray-400 outline-none"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={addToodo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500"
        >
          Add
        </button>
      </div>

      <section>
        {allTodo.length === 0 && (
          <h4 className="text-red-500 text-lg">
            Empty list. Please add some todos.
          </h4>
        )}
        <ol className="flex flex-col text-xl gap-1 list-decimal list-inside">
          {renderTodoList()}
        </ol>
      </section>
    </div>
  );
};

export default TodoApp;
