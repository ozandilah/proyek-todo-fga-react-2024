import React from "react";
import TodoComponent from "../Todo";

const TodosComponent = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoComponent key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodosComponent;
