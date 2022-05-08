import ListItem from './ListItem';
import PropTypes from 'prop-types';
import s from '../List/PhoneBookList.module.css';

export default function PhoneBookList({ contact, onDeleteContact }) {
  //console.log(contact)
  return (
    <div className={s.conteiner}>
      <h2 className={s.title}>Phone List of friends</h2>
      <ul>
        {contact.map(({ name, number, id }) => (
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
  contact: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
