import { useState } from "react";
import "./App.css";
import TodosComponent from "./components/moleculs/Todos";
import FormInputSection from "./components/organism/formInput";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const toggleEventComplete = (e) => {
    const updateTodoItem = todos.map((todo) => {
      if (todo.id === e) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodoItem);
  };

  const removeEventCompleteHandler = (e) => {
    const updatedTodos = todos.filter((todo) => todo.id !== e);
    setTodos(updatedTodos);
  };

  const addTodo = async (todoTitle) => {
    try {
      if (todoTitle === "") {
        return;
      }
      const newTodo = {
        id: todos.length + 1,
        title: todoTitle,
        completed: false,
      };
      const updatedTodos = await todos.concat(newTodo);
      setTodos(updatedTodos);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <header style={styles.title}>
        <h1>React Todo List</h1>
      </header>
      <section style={styles.container}>
        <FormInputSection addTodo={addTodo} />
        <TodosComponent
          todos={todos}
          ToggleEventCompleteHandler={toggleEventComplete}
          removeEventCompleteHandler={removeEventCompleteHandler}
        />
      </section>
    </div>
  );
}
const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};
export default App;
