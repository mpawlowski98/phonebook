import { selectFilteredContacts } from 'redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
}
export default ContactList;
