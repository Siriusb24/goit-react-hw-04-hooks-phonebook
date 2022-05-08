import './App.css';
import { Component } from 'react';
import Form from 'components/Form/Form';
import PhoneBookList from 'components/List/PhoneBookList';
import Filter from 'components/Filter/Filter';
import Section from './components/Section/Section';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      console.log('contacts were updated');
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmit = newContact => {
    const dublicate = this.state.contacts.find(
      contact => newContact.name === contact.name,
    );

    if (dublicate) {
      alert(`${newContact.name} has already use`);
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
    console.log(newContact);
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;

    const normalizeContact = filter.toLowerCase();

    //console.log(normalizeContact)

    const needContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContact),
    );

    return needContacts;
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.handleFilter();

    return (
      <Section title="Phonebook">
        <Form onSubmit={this.formSubmit} />
        <Filter value={filter} onChange={this.handleChangeFilter} />
        <PhoneBookList
          contact={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Section>
    );
  }
}
