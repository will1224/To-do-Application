import { useState } from "react";
import { RiCloseCircleLine } from "React-icons/ri";
import { TiEdit } from "React-icons/ti";
import { FaRegCheckCircle } from "React-icons/fa";

interface Props {
  text: string;
  index: number;
  deleteItem: (index: number) => void;
  editItem: (text: string, index: number) => void;
}

const TodoItem = ({ text, index, deleteItem, editItem }: Props) => {
  const [task, setTask] = useState(text);
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    console.log("Task to be deleted at index:", index);
    deleteItem(index);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const finishEdit = () => {
    setEdit(false);
    editItem(task, index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div className="task">
      <div className="task-text">
        {edit ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              finishEdit();
            }}
          >
            <input type="text" value={task} onChange={handleChange} />
            <button type="submit" style={{ color: "white" }}>
              <FaRegCheckCircle />
            </button>
          </form>
        ) : (
          <h1>{task}</h1>
        )}
      </div>
      <div className="icons">
        {!edit ? (
          <>
            <TiEdit onClick={handleEdit} />
            <RiCloseCircleLine onClick={handleDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TodoItem;
