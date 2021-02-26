import { SEARCH_REPOS_FAIL, SEARCH_REPOS_REQUEST, SEARCH_REPOS_SUCCESS } from '../types/reposTypes';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchReposRequestAction {
  type: typeof SEARCH_REPOS_REQUEST;
}

interface SearchReposSuccessAction {
  type: typeof SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface SearchReposFailAction {
  type: typeof SEARCH_REPOS_FAIL;
  payload: string;
}

export const repositoriesReducer = (
  state: RepositoriesState,
  action: SearchReposRequestAction | SearchReposSuccessAction | SearchReposFailAction
  // this won't let us return wrong data
): RepositoriesState => {
  switch (action.type) {
    case SEARCH_REPOS_REQUEST:
      return { loading: true, error: null, data: [] };
    case SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SEARCH_REPOS_FAIL:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
