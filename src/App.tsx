import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const updateTasks = (newTask: string) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteItem = (index: number) => {
    console.log("Deleting task at index:", index);
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    console.log("Tasks after deletion:", tasks);
  };
  const editItem = (text: string, index: number) => {
    const updatedArr = tasks.map((todo, id) =>
      id === index ? (todo = text) : todo
    );
    setTasks(updatedArr);
  };
  return (
    <div>
      <TodoForm newTask={updateTasks} />
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={task}
            text={task}
            index={index}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
