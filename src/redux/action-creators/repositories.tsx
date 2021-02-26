import axios from 'axios';
import { ReposActionType } from '../types';
import { ReposAction } from '../actions';
import { Dispatch } from 'redux';

export const searchRepos = (term: string) => {
  // this won't let us dispatch any bogus data
  return async (dispatch: Dispatch<ReposAction>) => {
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
