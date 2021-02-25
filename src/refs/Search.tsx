import React, { useState, useRef } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

interface DetailsInterface {
  name: string;
  age: number;
}

const Search: React.FC = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState<DetailsInterface | undefined>();
  // When the component first renders, there might be a
  // possibility that the input element jsx might not be
  // rendered yet
  // So we must account for input element to be undefined
  // Hence we will explicitly give it a value of null
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    setName('');
    const user = users.find((user) => user.name === name);
    setDetails(user);
  };

  return (
    <div>
      <h3>Search user</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <div>
        <strong>Name=</strong>
        {details?.name}
        <strong>Age=</strong>
        {details?.age}
      </div>
    </div>
  );
};

export default Search;
