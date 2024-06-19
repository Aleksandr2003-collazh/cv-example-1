import { useContext } from 'react';
import styles from './slider.module.css';
import { SliderContext } from './Slider';
import getDirection from '../../utils/getDirection';

export default function Dots() {
  let { slidesNumber, setCurrentSlide, currentSlide, setAutoplayContext, direction } = useContext(SliderContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {[...Array(slidesNumber).keys()].map((el) => (
        <div
          key={`${el}dot-key`}
          className={`${styles.dot} ${el === currentSlide ? styles.active : ''}`}
          onClick={() => {
            setCurrentSlide(el);
            setAutoplayContext();
            direction = getDirection(el, slidesNumber, direction)
          }}
        />
      ))}
    </div>
  );
}
