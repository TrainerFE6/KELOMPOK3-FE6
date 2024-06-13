import React, { useState, useEffect } from 'react';
import { HeroContainer, Slide, SlideImage, SlideText, ArrowButton, DotContainer, Dot } from '../styles/HeroSectionStyles';
import image1 from '../img/hero1.png';
import image2 from '../img/hero2.jpg';
import image3 from '../img/hero3.png';

const slides = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <HeroContainer>
      {slides.map((slide, index) => (
        <Slide key={index} isVisible={index === currentSlide}>
          <SlideImage src={slide.image} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}
      <ArrowButton direction="left" onClick={goToPreviousSlide}>&lt;</ArrowButton>
      <ArrowButton direction="right" onClick={goToNextSlide}>&gt;</ArrowButton>
      <DotContainer>
        {slides.map((_, index) => (
          <Dot key={index} isActive={index === currentSlide} />
        ))}
      </DotContainer>
    </HeroContainer>
  );
};

export default HeroSection;
