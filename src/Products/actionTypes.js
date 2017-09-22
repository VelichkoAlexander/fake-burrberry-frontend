import { createAction } from 'redux-actions';

const changeLocaleId = createAction('ADD_LOCALE_ID', localeId => ({
  localeId,
}));

export const changeProductId = createAction(
  'ADD_PRODUCT_ID',
  currentProductId => ({
    currentProductId,
  }),
);

export const addListData = createAction('ADD_LIST_DATA', listProducts => ({
  listProducts,
}));

export default changeLocaleId;
