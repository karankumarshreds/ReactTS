import { combineReducers } from 'redux';
import { repositoriesReducer } from './repositories';

const reducer = combineReducers({
  repositories: repositoriesReducer,
});

// we can use this globally for type guarding
// the type of our global state
declare global {
  /**
   * Since reducer is a function that returns an object
   * of our reducers => repositories: repositoriesReducer
   * So we use ReturnType (TS feature) to use it like:
   * Take the function and give us a type of whatever
   * the function returns
   */
  type RootState = ReturnType<typeof reducer>;
}

export default reducer;
