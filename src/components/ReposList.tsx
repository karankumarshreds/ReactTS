import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepos } = useActions();
  const { data, loading, error } = useSelector((state: RootState) => state.repositories);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepos(term);
  };

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

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
