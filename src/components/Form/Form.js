import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from '../Form/Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    const { name, value } = e.target;
    //console.log(e.target.name)

    this.setState({ [name]: value });
  };

  handleChangeNumber = e => {
    const { name, value } = e.target;
    //console.log(e.target.name)

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state)
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };

    this.props.onSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span className={s.name}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChangeName}
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
            value={this.state.number}
            onChange={this.handleChangeNumber}
            className={s.input}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
