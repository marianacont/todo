import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

// const initialStateTodos = [
//   {
//     id: 1,
//     title: "Prepare meal",
//     completed: true
//   },
//   {
//     id: 2,
//     title: "Practise Javascript 1 hour",
//     completed: false
//   },
//   {
//     id: 3,
//     title: "make an appointment at the doctor",
//     completed: false
//   },
//   {
//     id: 4,
//     title: "buy fruits and vegetables",
//     completed: false
//   },
//   {
//     id:5,
//     title: "Call aunt Susi",
//     completed: false
//   }
// ]
const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const countItemLeft = todos.filter((todo) => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))}

  const [filter, setFilter] = useState('all')
  const changeFilter = (filter) => setFilter(filter)

  const filterTodos = () => {
    switch(filter) {
      case 'all' :
        return todos;
      case 'active' :
        return todos.filter((todo) => !todo.completed);
      case 'completed' :
        return todos.filter((todo) => todo.completed);
      default :
        return todos;
    }
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTodos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
};

  return (
  <>
    <div className="bg-mobile-light bg-no-repeat bg-cover h-64 
    dark:bg-mobile-dark
    md:bg-desktop-light
    dark:md:dark:bg-desktop-dark
    ">
      <div className="mx-auto md:max-w-md xl:max-w-xl">
    <Header />

      <main className="bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded m-5">
        <TodoCreate createTodo={createTodo}/>

      <DragDropContext onDragEnd={handleDragEnd}>
        <TodoList 
          todos={filterTodos()} 
          updateTodo={updateTodo} 
          removeTodo={removeTodo} 
          countItemLeft={countItemLeft} 
          clearCompleted={clearCompleted}
          handleDragEnd={handleDragEnd} />
      </DragDropContext>


        {/* Contabilizador de tareas. Y clear */}
        <TodoComputed countItemLeft={countItemLeft} clearCompleted={clearCompleted}/>
      </main>

      <TodoFilter changeFilter={changeFilter} />

      <section className="text-center text-dark-g-blue pt-7 pb-20 dark:text-dark-grayish-blue">Drag and drop to reorder list
      <p className="text-xs">This is a <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub">FrontEnd Mentor Challenge</a></p>
      </section>
      </div>
      </div>
  </>)
  
}

export default App
