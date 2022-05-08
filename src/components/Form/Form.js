import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from '../Form/Form.module.css';

export default function Form ({onSubmit, onCheckforUniqContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(e.target.value)
    switch (name){
    case 'name':
      setName(value);
    break;
    case 'number':
      setNumber(value);
    break;
    default:
      return;  
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const checkUniqContact = onCheckforUniqContact(name);
    if (!checkUniqContact) return;

    if (!(name && number)) {
      alert('Empty field');
      return;
   }

    onSubmit({id: uuidv4(), name, number});
    reset();
    };

  const reset = (e) => {
      setName('');
      setNumber('');
      };

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.name}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          <span className={s.number}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
}
