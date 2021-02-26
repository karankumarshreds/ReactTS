import { Provider } from 'react-redux';
import { store } from '../redux';
import ReposList from './ReposList';

const App = () => {
  return (
    <Provider store={store}>
      <ReposList />
    </Provider>
  );
};

export default App;
