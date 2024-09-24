import {  useEffect, useState } from 'react';
import './App.css';
import { SelectValues, Todo } from './types';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import { SelectComponent } from './components/select-component';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [filterTodos, setFilterTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/list', {
          method: 'GET',
          redirect: 'follow',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const {data} = await response.json();
        setTodos(data)
        setFilterTodos(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
    
  }, []);

  useEffect(()=> {
    console.log('useFfect')
    setFilterTodos([...todos])
  },[todos])

  const addTodo = (todo:Todo) => setTodos([...todos, todo])
  const editTodo = (todo: Todo) => {
    // const todoIndex = todos.findIndex(todo => todo.id === id)
    // if(todoIndex < 0) return;
    console.log("=== ",{todo})
    // Find the todo with the same id
    const todoIndex = todos.findIndex(x => x.id === todo.id)
    if(todoIndex === -1) return
    const newTodos = [...todos]
    newTodos[todoIndex] = todo
    setTodos(newTodos)

  }
  const deleteTodo = (id: number) => {
    const newTodos =  todos.filter(todo =>  todo.id !== id)
    setTodos(newTodos)
  }
  const finishTodo = (id: number) => {
    const newTodos =  todos.map(x => x.id === id ? {...x, status: !x.status} : x)
    setTodos(newTodos)
  }
  const handleTodoSelect = (event:  React.ChangeEvent<HTMLSelectElement>) =>{
    switch (event.target.value) {
      case SelectValues.All:
        setFilterTodos(todos)
        break;
      case SelectValues.Done:          
          setFilterTodos(() => todos.filter(x => x.status === true))
          break;
      case SelectValues.Undone:
        setFilterTodos(() => todos.filter(x=> x.status === false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }
  return (
    <>
      <main>
        <h1 className='text-center'>todos</h1>
        <SelectComponent handleTodoSelect={handleTodoSelect} />
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={filterTodos}
          deleteTodo={deleteTodo}
          finishTodo={finishTodo}
          editTodo={editTodo}  
        />
      </main>
    </>
  );
}

export default App;
