import ReactDOM from 'react-dom';
import Todo from './state/Todo';

const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
