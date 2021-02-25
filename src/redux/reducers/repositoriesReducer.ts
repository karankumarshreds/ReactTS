interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export const repositoriesReducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
