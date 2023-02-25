import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import styles from "../css/singletodo.module.css";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <form className={styles.singleTodo}>
      {todo.isDone ? (
        <s className={styles.singleTodoText}>{todo.todo}</s>
      ) : (
        <span className={styles.singleTodoText}>{todo.todo}</span>
      )}

      <div>
        <span className={styles.icon}>
          <AiFillEdit />
        </span>
        <span className={styles.icon}>
          <AiFillDelete />
        </span>
        <span className={styles.icon} onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
