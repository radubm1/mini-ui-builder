import React, { useState } from 'react';
import BlockPalette from './components/BlockPalette';
import Canvas from './components/Canvas';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [blocks, setBlocks] = useState([]);

	const handleAddBlock = (block) => {
	  const newBlock = {
		...block,
		id: Date.now() + Math.random() // ID unic
	  };
	  setBlocks([...blocks, newBlock]);
	};
  
  const handleButtonClick = () => {
  setBlocks((prevBlocks) =>
    prevBlocks.map((block) =>
      block.type === 'image'
        ? { ...block, content: 'https://picsum.photos/200/150?random=' + Math.floor(Math.random() * 1000) }
        : block
    )
  );
};

  const handleRemoveBlock = (id) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  return (
    <div className="App">
      <h2>Mini UI Builder</h2>
      <BlockPalette onAdd={handleAddBlock} />
      <Canvas blocks={blocks} onRemove={handleRemoveBlock} onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;