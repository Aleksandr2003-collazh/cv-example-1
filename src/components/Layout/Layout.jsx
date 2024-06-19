import { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import propTypes, { string } from 'prop-types';
import styles from './layout.module.css';

export default function Layout({ children, className }) {
  return (
    <Fragment>
      <Header />
      <main className={`${styles.layout} ${className}`}>{children}</main>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: propTypes.node,
  className: string,
};
