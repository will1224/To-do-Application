import { useState } from "react";

interface props {
  newTask: (newTask: string) => void;
}

function TodoForm({ newTask }: props) {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    newTask(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Task"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
