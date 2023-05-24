import { addContact, deleteContact } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const loadContactsFromLocalStorage = () => {
  const storedContacts = localStorage.getItem('items');
  if (storedContacts) {
    return JSON.parse(storedContacts);
  } else {
    return [];
  }
};
export const saveContactsToLocalStorage = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};
const isRejectedAction = action => {
  return action.type.endsWith('/rejected');
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    loadContacts: state => {
      state.items = loadContactsFromLocalStorage();
    },
  },
  extraReducers: builder => {
    // builder.addCase(fetchContacts.fulfilled, (state, action) => {
    //   state.error = null;
    //   state.items = action.payload;
    // });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      saveContactsToLocalStorage(state.contacts);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    });
    builder.addMatcher(isPendingAction, handlePending);
    builder.addMatcher(isRejectedAction, handleRejected);
    builder.addDefaultCase(state => {
      state.error = 'someone use old function, fix i';
    });
  },
});

export const { setFilter, loadContacts } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectFilteredContacts = state => {
  const filter = state.contacts.filter.toLowerCase();
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
export default contactsSlice.reducer;
