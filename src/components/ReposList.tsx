import React, { useState } from 'react';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState<string>('');

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching');
  };
  return (
    <div>
      <h4>Search Repositories</h4>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default ReposList;
