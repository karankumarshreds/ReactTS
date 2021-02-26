import axios from 'axios';
import { ReposActionType } from '../types';
import { ReposAction } from '../actions';

export const searchRepos = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ReposActionType.SEARCH_REPOS_REQUEST,
    });

    try {
      const { data } = await axios.get(`registry.npmjs.org/-/v1/search`, {
        params: {
          text: term, // this makes the uri as `registry.npmjs.org/-/v1/search?text=${term}`
        },
      });
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ReposActionType.SEARCH_REPOS_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ReposActionType.SEARCH_REPOS_FAIL,
        payload: err.message,
      });
    }
  };
};
