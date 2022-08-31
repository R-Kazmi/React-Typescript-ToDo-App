import React from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="flex w-[100%] md:w-[29.5%] h-16 rounded-[5px] p-[20px] mt-[25px] bg-[url('https://img.freepik.com/free-photo/gray-color-cotton-texture-surface-background_74190-13729.jpg?size=626&ext=jpg')] bg-cover">
      <span className="flex-1 border-none text-[20px] focus:outline-none">
        {todo}
      </span>
      <div className="flex">
        <span className="ml-[10px] text-[25px] cursor-pointer">
          <AiFillEdit />
        </span>
        <span className="ml-[10px] text-[25px] cursor-pointer">
          <AiFillDelete />
        </span>
        <span className="ml-[10px] text-[25px] cursor-pointer">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
