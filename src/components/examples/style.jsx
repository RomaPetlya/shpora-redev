import React, { useState } from 'react';

export const Style = () => {
  const [color, setColor] = useState('#EB5757');

  const handleClick = () => {
    setColor(color === '#EB5757' ? '#57b0eb' : '#EB5757');
  }

  const style = {
    color: color
  };

  return (
    <div className='left-example'>
      <button onClick={handleClick}>Сменить цвет</button>
      <p style={style}>Этот текст может быть красным или синим</p>
    </div>
  );
}