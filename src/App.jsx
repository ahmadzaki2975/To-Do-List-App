import { useState } from "react";
import { nanoid } from 'nanoid';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";
import ListManage from "./components/ListManage";

function App() {
  //todos array
  const [todos, setTodos] = useState([
    {
      id : nanoid(),
      title : "Tugas Fisika Listrik dan Magnet",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, placeat.",
      priority: 2,
      tags : "#Lorem"
    },
    {
      id : nanoid(),
      title : "Tugas Aljabar Linear",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, placeat.",
      priority : 1,
      tags : "#Ipsum"
    },
    {
      id : nanoid(),
      title : "Tugas Analisis Variabel Kompleks",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, placeat.",
      priority : 3,
      tags : "#Dolor"
    }
  ]);

  console.log(todos);

  todos.map((todo) => {
    console.log(todo.priority);
  });

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    console.log(todos);
  };

  const sortByPriorityHandler = () => {
    const newTodos = todos.sort((a, b) => {
      return(a.priority - b.priority);
    });
    setTodos(newTodos);
    todos.map((todo) => {
      console.log(todo.priority);
    });
    console.log(todos);
  }

  const addNewTodoHandler = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(todos);
  }

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Form 
        addNewTodoHandler = {addNewTodoHandler}
        />
        <h1 className="text-center">To Dos</h1>
        <ListManage 
        sortByPriorityHandler = {sortByPriorityHandler}
        />
        <div className="card-container">
          {
            todos.map(todo => {
              return (
                <Card 
                key = {todo.id}
                id = {todo.id}
                title = {todo.title} 
                desc = {todo.desc} 
                tags = {todo.tags}
                priority = {todo.priority}
                deleteTodoHandler = {deleteTodoHandler}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
