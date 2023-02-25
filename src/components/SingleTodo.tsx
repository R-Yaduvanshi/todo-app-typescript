import React from "react";
import { Todo } from "../model";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="singleTodo">
      <span className="singleTodoText">{todo.todo}</span>
      <div>
        <span className="icon"></span>
        <span className="icon"></span>
        <span className="icon"></span>
      </div>
    </form>
  );
};

export default SingleTodo;
