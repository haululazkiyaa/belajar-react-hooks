import useTask from "../hooks/useTask";

const Todo = () => {
  const { tasks, inputNewTask, setInputNewTask, addTask, removeTask } =
    useTask();

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">To Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="I need to..."
          value={inputNewTask}
          onChange={(e) => setInputNewTask(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((item, index) => (
          <li
            key={item.task + index}
            className="flex justify-between items-center p-2 border-b border-gray-200"
          >
            <span>{item.task}</span>
            <button
              onClick={() => removeTask(item.id)}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
