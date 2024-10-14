import React from 'react';
import Item from '../Item/Item';
import './List.css';

function List({ todos, deleteDo, editDo }) {
  return (
    <div className="list">
      {todos.map((todo, index) => (
        <Item 
          key={index} 
          todo={todo} 
          index={index} 
          deleteDo={deleteDo} 
          editDo={editDo} 
        />
      ))}
    </div>
  );
}

export default List;
