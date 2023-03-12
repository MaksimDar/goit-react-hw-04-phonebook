import List from '../List/List';
import { nanoid } from 'nanoid';
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
  // const [filter, setFilter] = useState('');

  // const handleFilterChange = event => {
  //   setFilter({
  //     filter: event.currentTarget.value,
  //   });
  // };
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = ({ name, number }) => {
    // if (checkContact(name)) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }

    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    setContacts(prevState => [contact, ...prevState]);
  };

  // const checkContact = checkedNameContact => {
  //   const res = contacts.find(contact => contact.name === checkedNameContact);
  //   return res;
  // };
  // const checkContact = checkedName => {
  //   const checkedContacts = contacts.find(
  //     contact => contact.name === checkedName
  //   );
  //   return checkedContacts;
  // };
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
      <Form addContacts={addContact} />
      <InputHeader>Contacts</InputHeader>
      {/* <Filter value={filter} ChangeContact={handleFilterChange} /> */}
      {/* <List contacts={visibleContacts} deleteContact={removeItem} /> */}
    </>
  );
}
