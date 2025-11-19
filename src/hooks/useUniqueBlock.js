// src/hooks/useUniqueBlock.js
export const useUniqueBlock = () => {
  const create = (block) => ({
    ...block,
    id: Date.now() + Math.random()
  });

  return { create };
};