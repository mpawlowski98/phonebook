const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
      saveContactsToLocalStorage(state.contacts);
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      saveContactsToLocalStorage(state.contacts);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    loadContacts: state => {
      state.contacts = loadContactsFromLocalStorage();
    },
  },
});
export const { addContact, deleteContact, setFilter, loadContacts } =
  contactsSlice.actions;

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(({ name }) => name.includes(filter.toLowerCase()));
};

const loadContactsFromLocalStorage = () => {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
    return JSON.parse(storedContacts);
  } else {
    return [];
  }
};
export const saveContactsToLocalStorage = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export default contactsSlice.reducer;
