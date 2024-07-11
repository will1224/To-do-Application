import { useState } from "react";
import { RiCloseCircleLine } from "React-icons/ri";
import { TiEdit } from "React-icons/ti";
import { FaRegCheckCircle } from "React-icons/fa";

interface props {
  text: string;
  index: number;
  deleteItem: (index: number) => void;
  editItem: (text: string, index: number) => void;
}

const TodoItem = ({ text, index, deleteItem, editItem }: props) => {
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
    <div>
      <div>
        {edit ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              finishEdit();
            }}
          >
            <input type="text" value={task} onChange={handleChange} />
            <button type="submit">
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
            <RiCloseCircleLine onClick={handleDelete} />
            <TiEdit onClick={handleEdit} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
