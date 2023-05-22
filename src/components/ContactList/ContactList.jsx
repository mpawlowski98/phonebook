import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
}
export default ContactList;
