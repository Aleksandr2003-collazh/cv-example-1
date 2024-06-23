import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Fragment, useState } from 'react';
import photo from '../../assets/sasha.jpg';
import './Main.css';

export default function Main() {
  const [contactFormState, displayContactForm] = useState(false);
  return (
    <Fragment>
      <Layout className="main">
        <div className="main-container-info">
          <span className="main-rectangle" />
          <div className="h1-container">
            <h1 className="main-h1">Привет!</h1>
            <h1 className="main-h1">Меня зовут Александр</h1>
            <h1 className="main-h1"> я веб-дизайн</h1>
          </div>
          <p className="main-p">
            Я создаю макет сайта.
          </p>
          <Button
            className={`button-form`}
            onClick={() => displayContactForm(true)}
            label="Связаться со мной"
          />
        </div>
        <img className="main-photo" src={photo} />
      </Layout>
      {contactFormState && <ContactForm onClick={() => displayContactForm(false)} />}
    </Fragment>
  );
}
