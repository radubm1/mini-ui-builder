import React from 'react';
import Block from './Block';

export default function Canvas({ blocks = [], onRemove, onButtonClick }) {
  if (!Array.isArray(blocks)) {
    return <div className="canvas">⚠️ Eroare: lista de blocuri nu este validă.</div>;
  }

  return (
    <div className="canvas">
      <h3>Pagina ta</h3>
      {blocks.map((block) => (
        <Block key={block.id} block={block} onRemove={() => onRemove(block.id)} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
}