import React from "react";
import { FaClipboardList, FaPen } from "react-icons/fa";
import TodoList from "./components/TodoList";

import "../src/style/App.css";


function App() {
  return (
    <div className="App">
      {/* <div className="header">
        <div className="logoside">
          <FaPen />
          <h1>What to do</h1>
          <FaClipboardList />
        </div>
      </div> */}
      
      <div className="todoContent">
       <TodoList /> 
        
      </div>
    </div>
  );
}

export default App;

