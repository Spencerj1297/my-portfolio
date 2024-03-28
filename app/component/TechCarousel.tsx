import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const TechCarousel = () => {


const splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 3,
  autoScroll: {
    speed: 1,
  },
} );

splide.mount();
  return (
    <>

    </>
  );
};
