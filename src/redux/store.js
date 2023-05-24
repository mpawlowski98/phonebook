import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './contacts/contactsSlice';
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
