import React from "react";
import TodoComponent from "../Todo";

const TodosComponent = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoComponent key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};
export default TodosComponent;
