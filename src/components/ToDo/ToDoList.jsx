
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import './ToDoList.css';

function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }, [todos]);

  const addTask = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
  };

  const editDo = (index) => {
    setIsEditing(true);
    setEditIndex(index);
  };

  const updateDo = (index, updatedValue) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedValue;
    setTodos(updatedTodos);
    setIsEditing(false);
    setEditIndex(null);
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
        isEditing={isEditing}
        updateDo={updateDo}
        editIndex={editIndex}
      />
      <List todos={todos} deleteDo={deleteDo} editDo={editDo} />
    </div>
  );
}

export default ToDoList;
