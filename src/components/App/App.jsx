import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

import { nanoid } from 'nanoid';
import List from '../List/List';
import { InputHeader } from './App.styled';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const { number, name } = contacts;
  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch
  };
  // const handleFilterChange = event => {
  //   setFilter({
  //     filter: event.currentTarget.value,
  //   });
  // };

  // const addContacts = event => {
  //   event.preventDefault();
  //   const { name, number } = event.target.elements;

  //   setContacts(({ contacts }) => {
  //     const contactName = name.value;
  //     if (checkContact(contactName)) {
  //       alert(`${contactName} name is already in contacts`);
  //       return;
  //     }
  //     const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };
  //     return {
  //       contacts: [...contacts, newContact],
  //     };
  //   });
  // };
  // const checkContact = name => {
  //   const foundContact = contacts.find(contact => contact.name === name);
  //   return foundContact;
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
      <Form
        name={name}
        number={number}
        // addContacts={addContacts}
        handleInputChange={handleChangeInput}
      />
      <InputHeader>Contacts</InputHeader>
      {/* <Filter value={filter} ChangeContact={handleFilterChange} />
      <List contacts={visibleContacts} deleteContact={removeItem} /> */}
    </>
  );
};

export default App;
