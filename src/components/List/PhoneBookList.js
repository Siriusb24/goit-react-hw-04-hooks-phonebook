import { useState} from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types';
import s from '../List/PhoneBookList.module.css';
import Filter from 'components/Filter/Filter';;

export default function PhoneBookList({ contacts, onDeleteContact }) {
  const [filter, setFilter] = useState('')

  const handleChangeFilter = e => {
    setFilter(e.target.value );
  };

  const handleFilter = () => {
    const normalizeContact = filter.toLowerCase();

    console.log(normalizeContact)

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContact),
    );
  };


  const filteredContacts = handleFilter();
  
  //console.log(contacts)
  return (
    <div className={s.conteiner}>
    <Filter value={filter} onChange={handleChangeFilter}/>
      <h2 className={s.title}>Phone List of friends</h2>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
}

PhoneBookList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
