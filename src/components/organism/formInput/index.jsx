import React, { useState } from "react";

const FormInputSection = ({ addTodo }) => {
  const [title, setTitle] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  console.log("====================================");
  console.log(`Title : ${title}`);
  console.log("====================================");
  return (
    <div style={style.container}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Please Add Your Todo"
          style={style.formInputStyle}
          onChange={(e) => {
            handleChangeTitle(e);
          }}
          value={title}
        />
        <button style={style.buttonStyle}>Submit</button>
      </form>
    </div>
  );
};
const style = {
  container: {
    marginBottom: "32px",
  },
  formInputStyle: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
    marginRight: "32px",
    backgroundColor: "#EFECEB",
    border: "2px solid #ffff",
    color: "#1f1f1f",
  },
  buttonStyle: {
    height: "72px",
    fontSize: "16px",
    backgroundColor: "#000080",
  },
};

export default FormInputSection;
