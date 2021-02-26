import { combineReducers } from 'redux';
import { repositoriesReducer } from './repositories';

const reducer = combineReducers({
  repositories: repositoriesReducer,
});

export default reducer;
