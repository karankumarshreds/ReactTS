import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const Search: React.FC = () => {
  const [name, setName] = useState('');

  const onClick = () => {
    setName('');
  };

  return (
    <div>
      <h3>Search user</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default Search;
