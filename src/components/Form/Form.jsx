import React from 'react';
import './Form.css'
function Form({ addTask, inputValue, setInputValue, updateDo, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (isEditing) {
      updateDo(); 
    } else {
      addTask(inputValue); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task..."
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default Form;
