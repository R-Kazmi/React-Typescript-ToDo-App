import React, { useRef, useState, useEffect } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputT = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputT.current?.focus();
  
  }, [edit])
  

  return (
    <form
      className="flex w-[100%] md:w-[29.5%] h-16 rounded-[5px] p-[20px] mt-[25px] bg-[url('https://img.freepik.com/free-photo/gray-color-cotton-texture-surface-background_74190-13729.jpg?size=626&ext=jpg')] bg-cover"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          className="flex-1 p-[5px] border-none text-[20px] focus:outline-none"
          ref={inputT}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.done ? (
        <s className="flex-1 border-none text-[20px] focus:outline-none">
          {todo.todo}
        </s>
      ) : (
        <span className="flex-1 border-none text-[20px] focus:outline-none">
          {todo.todo}
        </span>
      )}

      <div className="flex">
        <span
          className="ml-[10px] text-[25px] cursor-pointer"
          onClick={() => {
            if (!edit && !todo.done) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="ml-[10px] text-[25px] cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className="ml-[10px] text-[25px] cursor-pointer"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
