import React, { useState ,useEffect} from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import './ToDoList.css';

function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : []; 
  });
  
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (todo) => {
    if( inputValue.trim()===""){
    return
    }
    setTodos((prevTodos) => [...prevTodos, todo]);
    setInputValue(''); 
  };


  const editDo = (index) => {
    setInputValue(todos[index]); 
    setIsEditing(true);
    setEditIndex(index); 
  };


  const updateDo = () => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue; 
      setTodos(updatedTodos); 
      setInputValue(''); 
      setIsEditing(false);
      setEditIndex(null); 
    }
  };


  const deleteDo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); 
    setTodos(updatedTodos); 
  };

  return (
    <div className='container'>
      <h1>My To-Do List</h1>
      <Form 
        addTask={addTask} 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        updateDo={updateDo} 
        isEditing={isEditing} 
      />
      <List todos={todos} deleteDo={deleteDo} editDo={editDo} />
    </div>
  );
}

export default ToDoList;
