import PropTypes from "prop-types";
import { useState } from "react";

const TodoList = ({ todo, deleteTodo }) => {
  const [isEditable, setisEditable] = useState(false);
  const [task, setTask] = useState(todo.task);

  return (
    <div className="flex justify-center">
      {isEditable ? (
        <input
          className="border-2 border-gray-500 py-1 px-2"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      ) : (
        <li>{task}</li>
      )}
      <span
        className="cursor-pointer ml-2"
        onClick={() => deleteTodo(todo.id)}
        title="Delete todo"
      >
        🗑️
      </span>
      <span
        className="cursor-pointer ml-2"
        onClick={() => setisEditable(!isEditable)}
        title="Edit todo"
      >
        {isEditable ? "✅" : "✏️"}
      </span>
    </div>
  );
};

TodoList.propTypes = {
  todo: PropTypes.object,
  deleteTodo: PropTypes.func,
};

export default TodoList;
