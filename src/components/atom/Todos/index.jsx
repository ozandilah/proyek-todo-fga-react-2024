import React from "react";
import TodoComponent from "../Todo";

const TodosComponent = ({
  todos,
  ToggleEventCompleteHandler,
  removeEventCompleteHandler,
}) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoComponent
            key={todo.id}
            todo={todo}
            ToggleEventCompleteHandler={ToggleEventCompleteHandler}
            removeEventCompleteHandler={removeEventCompleteHandler}
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
  },
};
export default TodosComponent;
