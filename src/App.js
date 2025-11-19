// App.js
import React, { useState } from 'react';
import BlockPalette from './components/BlockPalette';
import { useUniqueBlock } from './hooks/useUniqueBlock';
import Canvas from './components/Canvas';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
  const [blocks, setBlocks] = useState([]);
  const { create } = useUniqueBlock();

  const handleAddBlock = (block) => {
    const newBlock = create(block);
    setBlocks([...blocks, newBlock]);
  };

const handleClick = () => {
  // Găsește indexul ultimei imagini
  const lastImageIndex = [...blocks].reverse().findIndex(block => block.type === 'image');

  if (lastImageIndex === -1) return; // nicio imagine

  // Transformă indexul relativ în index absolut
  const absoluteIndex = blocks.length - 1 - lastImageIndex;

  const updatedBlocks = blocks.map((block, index) =>
    index === absoluteIndex
      ? { ...block, content: 'https://picsum.photos/400/300?random=${Math.random()}' }
      : block
  );

  setBlocks(updatedBlocks);
};

  return (
    <div className="app">
      <BlockPalette onAddBlock={handleAddBlock} />
      <div className="canvas">
        {blocks.map((block) => (
          <div key={block.id} className="block">
            {block.type === 'title' && <h1>{block.content}</h1>}
            {block.type === 'text' && <p>{block.content}</p>}
            {block.type === 'image' && <img src={block.content} alt="bloc vizual" />}
            {block.type === 'button' && (
              <button onClick={() => handleClick(block.id)}>{block.content}</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;