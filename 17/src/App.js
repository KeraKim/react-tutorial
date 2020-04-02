import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <Todos />
    </div>
  );
}

export default App;
