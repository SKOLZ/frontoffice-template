import api from '../config/api';
import { actionCreators as authActions } from '../redux/Auth/actions';

import * as LocalStorageService from './LocalStorageService';

export const setCurrentUser = currentUser => {
  api.setHeader('Authorization', currentUser.sessionToken);
  LocalStorageService.setSessionToken(currentUser.sessionToken);
};
export const getCurrentUser = () => {
  const currentSessionToken = LocalStorageService.getSessionToken();

  if (currentSessionToken) {
    api.setHeader('Authorization', currentSessionToken);

    return true;
  }

  return false;
};
export const removeCurrentUser = () => LocalStorageService.removeSessionToken();

export const authSetup = async dispatch => {
  const currentUser = await getCurrentUser();

  dispatch(authActions.init(currentUser));
};

export const login = values => api.post('/login', values);
