import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'; 
import './Item.css';

function Item({ todo, index, deleteDo, editDo }) { 
  return (
    <div className='item'>
      <p>{todo}</p>
      <div className='font-item'>
        <FontAwesomeIcon 
          icon={faTrash} 
          onClick={() => deleteDo(index)}
          className='delete-btn'
        />
        <FontAwesomeIcon 
          icon={faEdit}   
          onClick={() => editDo(index)} 
          className='edit-btn'
        />
      </div>
    </div>
  );
}

export default Item;
