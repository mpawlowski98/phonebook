import {
  deleteContact,
  selectFilteredContacts,
} from 'redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelate = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => handleDelate(id)}
        />
      ))}
    </ul>
  );
}
export default ContactList;
