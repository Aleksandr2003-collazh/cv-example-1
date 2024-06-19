import PropTypes, { string } from 'prop-types';

import styles from './slider.module.css';
import { useContext } from 'react';
import { SliderContext } from './Slider';

export default function Slide({ src, text}) {
  const {currentSlide} = useContext(SliderContext);
  
  return (
    <div className={styles['slide-list-container']} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
      <img className={styles['slide-img']} src={src} />
      <div>{text}</div>
    </div>
  );
}

Slide.propTypes = {
  src: string,
  text: string,
  style: PropTypes.shape({
    transform: string,
  }),
};
