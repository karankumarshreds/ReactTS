import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// action creators
import { actions } from '../redux';

export const useActions = () => {
  const dispatch = useDispatch();

  // returns
  /* 
    { searchReposAction: dispatch(searchReposAction()) }
    so you can directly call the searchReposAction()
  */
  return bindActionCreators(actions, dispatch);
};
