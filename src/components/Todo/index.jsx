import React from "react";

const TodoComponent = ({ todo }) => {
  return <div style={style}>{todo.title}</div>;
};
const style = {
  border: "2px solid #f4f4f4",
  fonSize: "24px",
};
export default TodoComponent;
