import React from 'react';
import kitten from '../assets/kitten.jpg';

export default function Block({ block, onRemove }) {
  return (
    <div className="block">
      {block.type === 'title' && <h1>{block.content}</h1>}
	  {block.type === 'image' && <img src={kitten} alt="pisică" />}
      {block.type === 'text' && <p>{block.content}</p>}
      {block.type === 'button' && <button>{block.content}</button>}
      <button className="remove" onClick={onRemove}>❌</button>
    </div>
  );
}