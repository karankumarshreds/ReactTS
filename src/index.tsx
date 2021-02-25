import ReactDOM from 'react-dom';
// import Todo from './state/Todo';
// import Search from './state/Search';
// import Event from './events/Event';
import Search from './refs/Search';

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
