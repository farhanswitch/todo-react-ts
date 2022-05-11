import React from "react";

export interface InputFieldProp {
  activity: string;
  setActivity: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}
export interface ToDoCardProps {
  handleSetEditable: (id?: number) => void;
  handleEdit: (updatedActivity?: string, id?: number) => void;
  handleDelete: (id?: number) => void;
  handleIsDone: (id?: number) => void;
  todo: ToDoType;
}
export type ToDoType = {
  id?: number;
  activity?: string;
  isDone?: boolean;
  isEditable?: boolean;
};
