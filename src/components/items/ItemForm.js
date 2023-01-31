import React, { useContext, useState } from 'react';
import { createListItem } from '../../services/items.js';
import { ItemsContext } from '../../context/ItemsContext.js';

export default function ItemForm() {
  const [description, setDescription] = useState('');
  const { setItems } = useContext(ItemsContext);
  const handleNewItem = async () => {
    try {
      const item = await createListItem(description);
      setItems((prev) => [...prev, item]);
      setDescription('');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="itemInputField">
      <input
        className="itemInput"
        type="text"
        placeholder="Add new item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="ItemAddButton" onClick={handleNewItem}>
        Add
      </button>
    </div>
  );
}
