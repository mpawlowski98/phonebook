import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contactsSlice';
import { authReducer } from './auth/slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const authPersisConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersisConfig, authReducer),
    contacts: contactsSlice,
  },
});
export default store;
