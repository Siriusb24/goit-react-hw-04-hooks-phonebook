import PropTypes from 'prop-types';
import s from '../List/ListItem.module.css';

export default function ListItem({ name, number, id, onDeleteContact }) {
  //console.log(id);
  return (
    <li className={s.item}>
      {name}:<span className={s.number}>{number}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
