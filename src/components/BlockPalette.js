import React from 'react';
import kitten from '../assets/kitten.jpg';

const blocks = [
  { type: 'title', label: 'Titlu Mare', content: 'Bine ai venit!' },
  { type: 'image', label: 'Imagine', content: kitten },
  { type: 'text', label: 'Text', content: 'Acesta este un text simplu.' },
  { type: 'button', label: 'Buton', content: 'Apasă-mă!' }
];

export default function BlockPalette({ onAdd }) {
  return (
    <div className="palette">
      <h3>Alege un bloc</h3>
      {blocks.map((block, i) => (
        <button key={i} onClick={() => onAdd(block)}>{block.label}</button>
      ))}
    </div>
  );
}