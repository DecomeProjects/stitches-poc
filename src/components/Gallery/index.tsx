import React, { useCallback, useState } from 'react';
import { Swiper as SwiperCore, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '@Assets/images/image-product-1.jpg';
import image2 from '@Assets/images/image-product-2.jpg';
import image3 from '@Assets/images/image-product-3.jpg';
import image4 from '@Assets/images/image-product-4.jpg';

import thumb1 from '@Assets/images/image-product-1-thumbnail.jpg';
import thumb2 from '@Assets/images/image-product-2-thumbnail.jpg';
import thumb3 from '@Assets/images/image-product-3-thumbnail.jpg';
import thumb4 from '@Assets/images/image-product-4-thumbnail.jpg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { useWindowSize } from '@Hooks/useWindowSize';

import { Container, ThumbItem, ThumbsList } from './styles';

SwiperCore.use([Navigation]);

const swipperItems = [
  {
    id: 0,
    title: 'Imagem 1',
    img: image1,
    thumb: thumb1,
  },

  {
    id: 1,
    title: 'Imagem 2',
    img: image2,
    thumb: thumb2,
  },

  {
    id: 2,
    title: 'Imagem 3',
    img: image3,
    thumb: thumb3,
  },

  {
    id: 3,
    title: 'Imagem 4',
    img: image4,
    thumb: thumb4,
  },
];

export const Gallery: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile } = useWindowSize();

  const changeSlide = useCallback(
    (index: number) => () => {
      swiper?.slideTo(index);
    },
    [swiper],
  );

  const handleSlideChange = useCallback((swiperCore: SwiperCore) => {
    setActiveIndex(swiperCore.activeIndex);
  }, []);

  return (
    <Container>
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={1}
        effect="fade"
        navigation={isMobile}
        onSlideChange={handleSlideChange}
      >
        {swipperItems.map(item => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isMobile && (
        <ThumbsList>
          {swipperItems.map((item, index) => (
            <ThumbItem
              key={item.id}
              onClick={changeSlide(index)}
              active={activeIndex === index}
            >
              <img src={item.thumb} alt={item.title} />
            </ThumbItem>
          ))}
        </ThumbsList>
      )}
    </Container>
  );
};
