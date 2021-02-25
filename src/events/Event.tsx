import React from 'react';

const Event: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('I am being dragged!');
  };

  return (
    <div>
      <input onChange={(e) => onChange(e)} />
      <div draggable onDragStart={(e) => onDragStart(e)}>
        Drag me!
      </div>
    </div>
  );
};

export default Event;
