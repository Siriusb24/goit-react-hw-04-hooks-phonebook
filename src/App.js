import './App.css';
import { useState, useEffect } from 'react';
import Form from 'components/Form/Form';
import PhoneBookList from 'components/List/PhoneBookList';
import Section from './components/Section/Section';


const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(()=>{
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue
  });

 useEffect(()=>{
  console.log('contacts were updated');
  window.localStorage.setItem('contacts', JSON.stringify(state));
 },[key, state]);

 return [state, setState];
}

export default function App () {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  

  const formSubmit = newContact => {
    setContacts(prevState => [...prevState, newContact]);
    console.log(newContact);
  };

   const handleUniqContact = name =>{
    
    const dublicate = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (dublicate) {
      alert(`${name} has already use`);
      return false;
    }
    return true;
   }


  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

    return (
      <Section title="Phonebook">
        <Form onSubmit={formSubmit} onCheckforUniqContact={handleUniqContact}/>
        <PhoneBookList
          contacts = {contacts}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    );
}
