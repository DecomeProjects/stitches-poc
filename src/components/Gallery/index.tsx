import React from 'react';
import { Swiper as SwiperCore, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '@Assets/images/image-product-1.jpg';
import image2 from '@Assets/images/image-product-2.jpg';
import image3 from '@Assets/images/image-product-3.jpg';
import image4 from '@Assets/images/image-product-4.jpg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { Container } from './styles';

SwiperCore.use([Navigation]);

export const Gallery: React.FC = () => {
  return (
    <Container>
      <Swiper slidesPerView={1} effect="fade" navigation>
        <SwiperSlide>
          <img src={image1} alt="Imagem 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image2} alt="Imagem 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image3} alt="Imagem 3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={image4} alt="Imagem 4" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
