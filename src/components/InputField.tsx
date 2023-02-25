import React, { useRef } from "react";
import style from "../css/input.module.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={style.input}
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Add your task"
        className={style.inputBox}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className={style.inputSubmit}>
        Add
      </button>
    </form>
  );
};

export default InputField;
