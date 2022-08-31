import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, done: false }]);
      setTodo("");
    }
  };


  return (
    <div className="App h-screen w-screen flex flex-col items-center bg-[#FEF5ED]">
      <span className="uppercase text-[35px] my-[15px] text-[#99A799] z-[1] text-center md:my-[30px] md:text-[40px]">
        ToDo
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
