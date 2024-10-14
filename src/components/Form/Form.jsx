
import './Form.css';
import React, { useState } from 'react';
import PropTypes from "prop-types";
function Form({ addTask, isEditing, updateDo, editIndex }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (isEditing) {
        updateDo(editIndex, inputValue);
      } else {
        addTask(inputValue.trim()); 
      }
      setInputValue(''); 
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
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}
Form.propTypes = {
  addTask: PropTypes.func,
  updateDo: PropTypes.func,
};
export default Form;


