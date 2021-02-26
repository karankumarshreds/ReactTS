import { Action } from '../actions';
import { ReposActionType } from '../types';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export const repositoriesReducer = (
  state: RepositoriesState,
  action: Action
  // this won't let us return wrong data
): RepositoriesState => {
  switch (action.type) {
    case ReposActionType.SEARCH_REPOS_REQUEST:
      return { loading: true, error: null, data: [] };
    case ReposActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ReposActionType.SEARCH_REPOS_FAIL:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
