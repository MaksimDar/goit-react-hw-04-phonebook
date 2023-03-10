import { useState } from 'react';
import { ContactForm, Label, Span, AddContactButton } from './Form.styled';
import PropTypes from 'prop-types';

export default function Form({ addContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
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
  const handleSubmit = e => {
    e.preventDefault();
    addContacts(name, number);
    setName('');
    setNumber('');
  };
  return (
    <ContactForm onSubmit={handleSubmit}>
      <Label htmlFor="name">
        <Span>Name</Span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          required
        />
      </Label>
      <Label htmlFor="number">
        <Span>Number</Span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={number}
          required
        />
      </Label>
      <AddContactButton>Add contact</AddContactButton>
    </ContactForm>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  addContacts: PropTypes.func,
  handleInputChange: PropTypes.func,
};
