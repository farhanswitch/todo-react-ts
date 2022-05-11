import React from "react";
import { ToDoCardProps } from "../Interfaces";
import { FiEdit } from "react-icons/fi";
import { MdDone, MdDelete } from "react-icons/md";
import { RiSave3Fill } from "react-icons/ri";

const ToDoCard: React.FC<ToDoCardProps> = ({
  todo,
  handleSetEditable,
  handleEdit,
  handleIsDone,
  handleDelete,
}) => {
  const [act, setAct] = React.useState<string | undefined>(todo.activity);
  return (
    <li
      className={`flex items-center w-full md:w-[40%] mb-4 px-4 py-2 block shadow-md shadow-sky-200 border border-sky-100 rounded-xl bg-white ${
        todo.isEditable && "bg-amber-500 text-white font-semibold"
      } ${todo.isDone && "bg-lime-500 text-white"}`}
    >
      <div className="flex justify-center items-center flex-1 mr-2">
        <form
          autoComplete="off"
          autoCorrect="off"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleEdit(act, todo.id);
            handleSetEditable(todo.id);
          }}
          action="submit"
        >
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleEdit(todo.activity, todo.id);
              setAct(event.target.value);
            }}
            readOnly={!todo.isEditable}
            type="text"
            name="task"
            id="task"
            value={act}
            className={`w-full txet-slate-700 px-3 py-1 bg-white outline-none text-center bg-transparent rounded-lg`}
          />
        </form>
      </div>
      <div
        className={`flex gap-1 px-3 py-3 text-xl rounded-md items-center text-slate-700 ${
          (todo.isEditable && "bg-white") || (todo.isDone && "bg-white")
        }`}
      >
        <span
          title={todo.isEditable ? "Save Edit" : "Edit"}
          onClick={() => handleSetEditable(todo.id)}
          className="hover:text-yellow-600 font-semibold"
        >
          {todo.isEditable ? <RiSave3Fill /> : <FiEdit />}
        </span>
        <span
          title="Delete"
          onClick={() => {
            handleDelete(todo.id);
          }}
          className="hover:text-red-600 font-semibold"
        >
          <MdDelete />
        </span>
        <span
          title={todo.isDone ? "Mark as undone" : "Mark as done"}
          onClick={() => {
            handleIsDone(todo.id);
          }}
          className={`hover:text-green-600 font-semibold ${
            todo.isDone && "text-green-600"
          }`}
        >
          <MdDone />
        </span>
      </div>
    </li>
  );
};
export default ToDoCard;
