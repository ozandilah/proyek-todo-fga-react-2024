import React from "react";

const TodoComponent = ({ todo, ToggleEventCompleteHandler }) => {
  const todoStyleTitle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={style.container}>
      <input
        type="checkbox"
        style={style.checkbox}
        onChange={() => ToggleEventCompleteHandler(todo.id)}
      />
      <p style={todoStyleTitle()}>{todo.title}</p>
    </div>
  );
};

const style = {
  container: {
    border: "2px solid #f4f4f4",
    fonSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },
};
export default TodoComponent;
