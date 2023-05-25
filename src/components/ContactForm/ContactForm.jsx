import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import css from 'App.module.css';
import { selectContacts } from 'redux/contacts/contactsSlice';
import { Button, TextField } from '@mui/material';

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
      <TextField
        className={css.input}
        name="name"
        value={name}
        onChange={handleChange}
        title="Name"
        label="Name"
        required
        variant="outlined"
      />

      <TextField
        className={css.input}
        name="number"
        value={number}
        onChange={handleChange}
        title="Phone number"
        required
        label="Phone number"
        variant="outlined"
      />

      <Button type="submit" variant="contained" disableElevation>
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;
