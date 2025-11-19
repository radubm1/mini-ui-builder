import React from 'react';
import Block from './Block';

export default function Canvas({ blocks, onRemove }) {
  return (
    <div className="canvas">
      <h3>Pagina ta</h3>
		{Array.isArray(blocks) && blocks.map((block) => (
		  <Block key={block.id} block={block} onRemove={() => onRemove(block.id)} />
		))}
    </div>
  );
}