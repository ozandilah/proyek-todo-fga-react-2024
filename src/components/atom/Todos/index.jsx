import React from "react";
import TodoComponent from "../Todo";

const TodosComponent = ({ todos, ToggleEventCompleteHandler }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoComponent
            key={todo.id}
            todo={todo}
            ToggleEventCompleteHandler={ToggleEventCompleteHandler}
          />
        );
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
