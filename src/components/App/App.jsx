import { nanoid } from 'nanoid';
// import List from '../List/List';
import { InputHeader } from './App.styled';
import Form from '../Form/Form';
// import Filter from '../Filter/Filter';
import { useState, useEffect } from 'react';
const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return window.localStorage.getItem(key) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  // const handleFilterChange = event => {
  //   setFilter({
  //     filter: event.currentTarget.value,
  //   });
  // };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContacts = (name, number) => {
    const condition = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (condition) {
      alert(`${name} name is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prevState => [newContact, ...prevState]);
  };

  // const removeItem = contactId => {
  //   setContacts(() => ({
  //     contacts: contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };
  // const getVisibleContacts = normalizedFilter => {
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const normalizedFilter = filter.toLocaleLowerCase();
  // const visibleContacts = getVisibleContacts(normalizedFilter);

  return (
    <>
      <InputHeader>PhoneBook</InputHeader>
      <Form addContacts={addContacts} />
      <InputHeader>Contacts</InputHeader>
      {/* <Filter value={filter} ChangeContact={handleFilterChange} />
      <List contacts={visibleContacts} deleteContact={removeItem} /> */}
    </>
  );
}
