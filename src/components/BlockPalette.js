// BlockPalette.js
import React from 'react';
import kitten from '../assets/kitten.jpg';

const blocks = [
  { type: 'title', label: 'Titlu Mare', content: 'Bine ai venit!' },
  { type: 'image', label: 'Imagine', content: kitten },
  { type: 'text', label: 'Text', content: 'Acesta este un text simplu.' },
  { type: 'button', label: 'Buton', content: 'Apasă-mă!' }
];

const BlockPalette = ({ onAddBlock }) => (
  <div className="block-palette">
    {blocks.map((block, index) => (
      <button key={index} onClick={() => onAddBlock(block)}>
        {block.label}
      </button>
    ))}
  </div>
);

export default BlockPalette;