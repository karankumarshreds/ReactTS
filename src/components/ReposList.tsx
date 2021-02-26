import React, { useState } from 'react';
import { actions } from '../redux';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepos } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepos(term);
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
