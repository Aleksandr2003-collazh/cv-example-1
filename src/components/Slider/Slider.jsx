import { createContext, useContext, useEffect, useState } from 'react';
import getDirection from '../../utils/getDirection';
import Dots from './Dots';
import Slide from './Slide';
import example from '../../assets/img1.png';
import example2 from '../../assets/img2.jpeg';
import example3 from '../../assets/img3.jpeg';
import styles from './slider.module.css';

export const SliderContext = createContext({direction: true});

export default function Slider() {
  const [slide, setSlide] = useState(0); //обновление state для ререндера
  const [autoplay, setAutoplay] = useState(true);
  let {direction} = useContext(SliderContext);
  const data = [
    { src: example, text: '' },
    { src: example2, text: '' },
    { src: example3, text: '' },
  ];

  useEffect(() => {
    if(!autoplay) return;
    const interval = setInterval(() => {
      setSlide(slide => {
        direction = getDirection(slide, data.length, direction)
        if (direction) {
          return slide >= data.length - 1 ? 0 : slide + 1
        } else {
          return slide >= 0 ? slide - 1 : 0
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [autoplay, data.length]);

  return (
    <SliderContext.Provider
      value={{
        currentSlide: slide,
        slidesNumber: data.length,
        setCurrentSlide: (num) => {
          setSlide(num);
        },
        setAutoplayContext: () => {
          setAutoplay(!autoplay)
        },
        direction
      }}
    >
      <div className={styles['slider-container']}>
        <div className={styles['slider-list']}>
          {data.map(({ src, text }, i) => (
            <Slide
              key={i}
              src={src}
              text={text}
            />
          ))}
        </div>
      </div>
      <Dots />
    </SliderContext.Provider>
  );
}
