import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
import close from '../../assets/close.svg';
import './ContactForm.css';

export default function ContactForm({ onClick }) {
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const [email, setEmail] = useState('');
  const ref = useRef(null);
  return (
    <div
      className="blackout"
      onClick={(e) => (e.target.className === 'blackout' ? onClick() : null)}
    >
      <div className="close-button">
        <img src={close} onClick={onClick} />
      </div>
      <form
        className="contact-form"
        onSubmit={
          handleSubmit(
          () => {
            console.log('correct', email, errors);
            console.log(ref.current);
            const data = new FormData(ref.current);
            console.log(Object.fromEntries(data))
          },
          () => {
            console.log('errors', errors);
          }
        )
      }
        ref={ref}
      >
        <div>
          <label>{errors.email?.message || 'E-mail'}</label>
          <input
            name="email"
            id="email"
            onInput={(e) => setEmail(e.target.value)}
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Введите корректный email',
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="tel">Телефон</label>
          <input type="tel" name="tel" id="tel" />
        </div>
        <div className="comment">
          <label htmlFor="comment">Сообщение</label>
          <textarea cols="35" rows="3" name="message" />
        </div>
        <div>
          <button type="submit">отправить</button>
        </div>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onClick: propTypes.func,
};
