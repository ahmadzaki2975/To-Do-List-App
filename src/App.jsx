import { useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";
import ListManage from "./components/ListManage";

function App() {
  //? todos array
  const [todos, setTodos] = useState([]);

  //?completed array
  const [completed, setCompleted] = useState([]);

  console.log(todos);

  todos.map((todo) => {
    console.log(todo.priority);
  });

  const deleteTodoHandler = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(newTodos);
    const pushComplete = todos.filter((todo) => {
      return todo.id === id;
    });
    setCompleted(pushComplete);
  };

  const sortByPriorityHandler = () => {
    const sortedTodos = todos.sort((a, b) => {
      return a.priority - b.priority;
    });
    console.log(sortedTodos);
    setTodos([...sortedTodos]);
  };

  const addNewTodoHandler = (todo) => {
    if (todo.title !== "" && todo.desc !== "" && todo.priority !== 0) {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      console.log(todos);
    } else {
      alert("Please complete the form.");
    }
  };

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Form addNewTodoHandler={addNewTodoHandler} />
        <h1 className="text-center">To Do List</h1>
        <ListManage sortByPriorityHandler={sortByPriorityHandler} />
        <div className="finished d-flex align-items-center flex-column">
          <p className="finished">Last Finished Task : &ensp;</p>
          {completed[0] ? (
            <span className="badge bg-success">{completed[0].title}</span>
          ) : (
            <span className="badge bg-danger">
              You haven't finished any task
            </span>
          )}
        </div>
        <div className="card-container">
          {todos.length !== 0 ? (
            todos.map((todo) => {
              return (
                <Card
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  desc={todo.desc}
                  tags={todo.tags}
                  priority={todo.priority}
                  deleteTodoHandler={deleteTodoHandler}
                />
              );
            })
          ) : (
            <div className="alert alert-info">You have no task to do right now</div>
          )}
        </div>
      </main>
      <footer className="d-flex justify-content-center bg-dark text-light p-2">
        Ahmad Zaki Akmal
      </footer>
    </div>
  );
}

export default App;
