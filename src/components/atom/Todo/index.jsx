import React from "react";

const TodoComponent = ({
  todo,
  ToggleEventCompleteHandler,
  removeEventCompleteHandler,
}) => {
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
      <button
        style={style.button}
        onClick={() => removeEventCompleteHandler(todo.id)}
      >
        x
      </button>
    </div>
  );
};

const style = {
  container: {
    border: "2px solid #f4f4f4",
    fonSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "20%",
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};
export default TodoComponent;
