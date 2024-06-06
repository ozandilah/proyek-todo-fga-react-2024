import "./App.css";
import TodosComponent from "./components/Todos";

function App() {
  const todos = [
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
  ];
  return (
    <div>
      <header>
        <h1>React Todo List</h1>
      </header>
      <section>
        <h2>Ini Form Inputnya</h2>
        <TodosComponent todos={todos} />
      </section>
    </div>
  );
}

export default App;
