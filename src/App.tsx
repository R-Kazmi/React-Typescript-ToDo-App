import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")

  return (
    <div className="App h-screen w-screen flex flex-col items-center bg-[#FEF5ED]">
      <span className="uppercase text-[35px] my-[15px] text-[#99A799] z-[1] text-center md:my-[30px] md:text-[40px]">
        ToDo
      </span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default App;
