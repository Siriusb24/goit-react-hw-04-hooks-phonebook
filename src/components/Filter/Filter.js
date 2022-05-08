import React from 'react';
import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={s.form}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
