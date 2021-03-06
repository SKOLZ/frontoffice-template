import { completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  resource: {},
  page: []
};

const reducerDescription = {
  primaryActions: [
    actions.GET_RESOURCE,
    actions.GET_RESOURCE_DETAIL,
    actions.CREATE_RESOURCE,
    actions.DELETE_RESOURCE,
    actions.EDIT_RESOURCE
  ]
};

export default createReducer(initialState, completeReducer(reducerDescription));
