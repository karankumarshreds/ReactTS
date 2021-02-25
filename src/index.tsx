import ReactDOM from 'react-dom';
// import Todo from './state/Todo';
// import Search from './state/Search';
import Event from './events/Event';

const App = () => {
  return (
    <div>
      <Event />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
