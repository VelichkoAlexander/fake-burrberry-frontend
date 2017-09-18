import { handleActions, combineActions } from 'redux-actions';
import { changeLocaleId } from './actionTypes';

const defaultState = { localeId: 0 };
const reducer = handleActions(
  {
    [combineActions(changeLocaleId)](state, { payload: { localeId } }) {
      return { ...state, localeId };
    },
  },
  defaultState,
);

export default reducer;
