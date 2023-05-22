import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  setFilter,
  loadContacts,
} from 'redux/contacts/contactsSlice';
import { useEffect } from 'react';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const handleSubmit = contact => {
    dispatch(addContact(contact));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};
