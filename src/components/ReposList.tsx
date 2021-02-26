import React, { useState } from 'react';
import { searchRepos } from '../redux';
import { useDispatch } from 'react-redux';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // call the action creator
    dispatch(searchRepos(term));
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
