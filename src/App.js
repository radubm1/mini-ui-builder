import React, { useState } from 'react';
import BlockPalette from './components/BlockPalette';
import Canvas from './components/Canvas';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [blocks, setBlocks] = useState([]);

  const handleAddBlock = (block) => {
    setBlocks([...blocks, { ...block, id: uuidv4() }]);
  };

  const handleRemoveBlock = (id) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  return (
    <div className="App">
      <h2>Mini UI Builder</h2>
      <BlockPalette onAdd={handleAddBlock} />
      <Canvas blocks={blocks} onRemove={handleRemoveBlock} />
    </div>
  );
}

export default App;