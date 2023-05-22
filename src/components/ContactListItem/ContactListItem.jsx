function ContactListItem({ name, number, onDelete }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
