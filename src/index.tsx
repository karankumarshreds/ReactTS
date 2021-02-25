import ReactDOM from 'react-dom';
// import Todo from './state/Todo';
import Search from './state/Search';

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
