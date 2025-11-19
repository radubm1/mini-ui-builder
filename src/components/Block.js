import React from 'react';

export default function Block({ block, onRemove }) {
  return (
    <div className="block">
      {block.type === 'title' && <h1>{block.content}</h1>}
      {block.type === 'image' && <img src={block.content} alt="bloc vizual" />}
      {block.type === 'text' && <p>{block.content}</p>}
      {block.type === 'button' && <button>{block.content}</button>}
      <button className="remove" onClick={onRemove}>❌</button>
    </div>
  );
}