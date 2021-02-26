import { ReposActionType } from '../types/repositories';

interface SearchReposRequestAction {
  type: ReposActionType.SEARCH_REPOS_REQUEST;
}

interface SearchReposSuccessAction {
  type: ReposActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface SearchReposFailAction {
  type: ReposActionType.SEARCH_REPOS_FAIL;
  payload: string;
}

export type Action = SearchReposRequestAction | SearchReposSuccessAction | SearchReposFailAction;
