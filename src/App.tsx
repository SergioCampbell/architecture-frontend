import { ChangeEvent, useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { iTodo } from "./interface/interface";

function App() {
  const [task, setTask] = useState("");


  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
