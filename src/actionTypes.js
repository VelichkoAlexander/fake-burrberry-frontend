import { createAction } from 'redux-actions';

const changeLocaleId = createAction('ADD_LOCALE_ID', localeId => ({
  localeId,
}));

export default changeLocaleId;
