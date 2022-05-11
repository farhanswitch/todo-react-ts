import React, { useRef } from "react";
import { InputFieldProp } from "../Interfaces";

function InputField({ activity, setActivity, handleSubmit }: InputFieldProp) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        inputRef.current?.blur();
        handleSubmit();
      }}
      action="submit"
      className="shadow-xl shadow-slate-400 w-[90vw] max-w-[90%]  mx-auto overflow-hidden rounded-xl relative justify-center flex items-center"
    >
      <input
        autoComplete="off"
        ref={inputRef}
        className="w-[100%] px-6 py-4  rounded-xl mx-auto"
        value={activity}
        type="text"
        name="input"
        id="input"
        placeholder="Enter an activity"
        onChange={(e) => setActivity(e.target.value)}
      />
      <button className="absolute right-2 h-[80%] text-white aspect-square rounded-full bg-blue-500">
        Add
      </button>
    </form>
  );
}

export default InputField;
