import React, { useRef } from "react";
import { JsxElement } from "typescript";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex w-[95%] md:w-[90%] relative items-center"
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="w-[100%] rounded-[50px] px-[30px] py-[20px] text-[20px] border-none transition duration-[0.2s] shadow-[0_0_5px_black] bg-[#D3E4CD] focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)]"
        type="input"
        placeholder="Enter The Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="absolute w-[50px] h-[50px] m-[12px] rounded-[50px] right-0 border-none text-[15px] bg-[#99A799] text-[#FEF5ED] transition-all duration-[0.2s] shadow-[0_0_10px_black] hover:bg-[#FEF5ED] hover:text-[#99A799] active:scale-[0.8] active:shadow-[0_0_5px_black]"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
