import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import css from 'App.module.css';
import { selectContacts } from 'redux/contacts/contactsSlice';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists = contacts.some(contact => contact.name === name);

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    onSubmit({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          title="Name"
          required
        />
      </label>

      <label>
        Phone number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number"
          required
        />
      </label>

      <button className={css.addContact} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
