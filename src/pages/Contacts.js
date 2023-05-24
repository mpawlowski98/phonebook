import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  setFilter,
  addContact,
  deleteContact,
  loadContacts,
} from 'redux/contacts/contactsSlice';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleSubmit = contact => {
    dispatch(addContact(contact));
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
