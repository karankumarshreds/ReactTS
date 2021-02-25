interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export const repositoriesReducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case 'SEARCH_REPOS_REQUEST':
      return { loading: true, error: null, data: [] };
    case 'SEARCH_REPOS_SUCCESS':
      return { loading: false, error: null, data: action.payload };
    case 'SEARCH_REPOS_ERROR':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
