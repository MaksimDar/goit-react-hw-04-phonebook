import List from '../List/List';
import { nanoid } from 'nanoid';
import { InputHeader } from './App.styled';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import { useState, useEffect } from 'react';
const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key) ?? defaultValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };
  const addContact = (name, number) => {
    const condition = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (condition) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prevState => [newContact, ...prevState]);
  };

  const removeItem = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter;
    return contacts.filter(contact => contact.name.includes(normalizedFilter));
  };
  const filteredContacts = getVisibleContacts();

  return (
    <>
      <InputHeader>PhoneBook</InputHeader>
      <Form addContacts={addContact} />
      <InputHeader>Contacts</InputHeader>
      <Filter value={filter} ChangeContact={handleFilterChange} />
      <List contacts={filteredContacts} deleteContact={removeItem} />
    </>
  );
};
