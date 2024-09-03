import { useState } from "react";

const useTask = () => {
  const [tasks, setTasks] = useState([]);
  const [inputNewTask, setInputNewTask] = useState("");

  const addTask = () => {
    if (inputNewTask === "") {
      alert("Task tidak boleh kosong");
    } else {
      const newTask = {
        id: tasks.length + 1,
        task: inputNewTask,
      };

      setTasks((prevTask) => [...prevTask, newTask]);
      setInputNewTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((item) => item.id !== index);
    setTasks(newTasks);
  };

  return { tasks, inputNewTask, setInputNewTask, addTask, removeTask };
};

export default useTask;
