import { handleActions, combineActions } from 'redux-actions';
import changeLocaleId, { addListData, changeProductId } from './actionTypes';

const defaultState = {
  localeId: 0,
  listProducts: [],
  currentProductId: 0,
};
const reducer = handleActions(
  {
    [combineActions(changeLocaleId, addListData, changeProductId)](
      state,
      { payload: { localeId, listProducts, currentProductId } },
    ) {
      return {
        ...state,
        localeId: localeId || state.localeId,
        listProducts: state.listProducts.concat(listProducts || []),
        currentProductId: currentProductId || state.currentProductId,
      };
    },
  },
  defaultState,
);

export default reducer;
