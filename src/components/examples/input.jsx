import React, { useState } from 'react';

export const Input = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className='left-example'>
      <label>
        Введи свое имя:
      </label>
      <input type="text" value={name} onChange={handleChange} />
      <p>Привет, {name}!</p>
    </div>
  );
}