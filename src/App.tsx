import React, { useState } from "react";
import InputField from "./components/InputField";
import { ToDoType } from "./Interfaces";
import ToDoCard from "./components/ToDoCard";

const App: React.FC = () => {
  const [activity, setActivity] = useState<string>("");
  const [todos, setTodos] = useState<ToDoType[] | []>([]);
  const findToDo = (todos: ToDoType[], id?: number) => {
    return todos.filter((todo: ToDoType) => todo.id === id && todo);
  };
  const getIndex: (id?: number) => number = (id?: number) => {
    const index = todos.findIndex((todo: ToDoType) => todo.id === id);
    return index;
  };
  const handleIsDone = (id?: number) => {
    const todoToHandle: ToDoType[] = findToDo(todos, id);
    let updatedTodo: ToDoType = { ...todoToHandle.filter(Boolean)[0] };
    updatedTodo = { ...updatedTodo, isDone: !updatedTodo.isDone };
    const index: number = getIndex(id);
    let cloneOfTodos: ToDoType[] = [...todos];
    cloneOfTodos[index] = updatedTodo;
    setTodos(cloneOfTodos);
  };
  const handleDelete = (id?: number) => {
    let cloneOfTodos: ToDoType[] = [...todos];
    cloneOfTodos = [...cloneOfTodos.filter((todo) => todo.id !== id)];
    setTodos(cloneOfTodos);
  };
  const handleEdit = (updatedActivity?: string, id?: number) => {
    const todoUpdate: ToDoType[] = findToDo(todos, id);
    let updatedTodo: ToDoType = { ...todoUpdate.filter(Boolean)[0] };
    updatedTodo = { ...updatedTodo, activity: updatedActivity };
    const index: number = getIndex(id);
    let cloneOfTodos: ToDoType[] = [...todos];
    cloneOfTodos[index] = updatedTodo;
    setTodos(cloneOfTodos);
  };
  const handleSetEditable = (id?: number) => {
    if (!id) return;
    const todoToEdit: ToDoType[] = findToDo(todos, id);
    let editedTodo: ToDoType = { ...todoToEdit.filter(Boolean)[0] };
    editedTodo = { ...editedTodo, isEditable: !editedTodo.isEditable };
    const index: number = getIndex(id);
    let copyOfTodos: ToDoType[] = [...todos];
    copyOfTodos[index] = editedTodo;
    setTodos(copyOfTodos);
  };
  const handleSubmit = (): void => {
    const newToDo: ToDoType[] = [
      ...todos,
      {
        id: Date.now(),
        activity,
        isDone: false,
        isEditable: false,
      },
    ];
    setTodos(newToDo);
    setActivity("");
  };
  return (
    <div className="App">
      <div className="container pt-6 max-w-3xl mx-auto font-inter min-h-screen">
        <h1 className="text-center hover:font-poppins">ToDo App</h1>

        <InputField
          activity={activity}
          setActivity={setActivity}
          handleSubmit={handleSubmit}
        />
        <ul className="w-full mt-6 flex flex-wrap justify-evenly">
          {todos.length > 0 &&
            todos.map((todo: ToDoType) => {
              return (
                <ToDoCard
                  key={todo.id}
                  todo={todo}
                  handleSetEditable={handleSetEditable}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  handleIsDone={handleIsDone}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
