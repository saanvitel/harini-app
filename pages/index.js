// pages/index.js

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import Head from 'next/head';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #F6EEE0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// Styled components
const AppText = styled.h1`
  font-family: 'Caveat', sans-serif;
  color: #C38370;
  padding: 0 1rem 1rem 1rem; 
  margin: 0 1rem 1rem 1rem; 
  text-align: center;
  font-size: 5rem;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 600px;
  position: relative;
`;

const Slide = styled.div`
  width: 100%; /* Matches container width */
  height: 100%; /* Matches container height */
`;

const ArrowLeft = styled(BsArrowLeftCircleFill)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  left: 1rem;
  cursor: pointer;
  z-index: 1; 
`;

const ArrowRight = styled(BsArrowRightCircleFill)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: white;
  right: 1rem;
  cursor: pointer;
  z-index: 1; 
`;

const Indicators = styled.span`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 1rem;
  gap: 0.3rem; /* Adds consistent space between buttons */
`;

const Indicator = styled.button`
  background-color: white;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%; /* Ensures a perfect circle */
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
  cursor: pointer;
`;

const IndicatorInactive = styled.button`
  background-color: grey;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%; /* Ensures a perfect circle */
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
  cursor: pointer;
`;

// Carousel Component
const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  return (
    <CarouselContainer>
      <ArrowLeft onClick={prevSlide}/>
      {data.map((item, idx) => (
        slide === idx &&
        (<Slide key={idx}>
          <Image
            src={item.src}
            alt={`Image ${idx + 1}`}
            fill
            style={{ objectFit: 'cover', borderRadius: '0.5rem', boxShadow: '0px 0px 7px #666' }}
            quality={100}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </Slide>
        )
      ))}
      <ArrowRight onClick={nextSlide}/>
      <Indicators>
        {data.map((_, idx) => (
          slide === idx ? 
            <Indicator key={idx} onClick={null}></Indicator>
          : 
            <IndicatorInactive key={idx} onClick={null}></IndicatorInactive>
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

// Main Page Component
export default function Home() {
  const slides = [
    { "src" : "/data/hariniimages/456457878_1663455497807977_3392293573821402843_n.jpg" },
    { "src" : "/data/hariniimages/456601748_504799122400400_7591596280583473838_n.jpg" },
    { "src" : "/data/hariniimages/456606081_3125359384266674_7268094909739376437_n.jpg" },
    { "src" : "/data/hariniimages/456713481_907430831418460_2268687703775736694_n.jpg" },
    { "src" : "/data/hariniimages/456982778_842493554639211_378569624142519725_n.jpg" },
    { "src" : "/data/hariniimages/457286611_1074721583994326_9219735236107244096_n.jpg" },
    { "src" : "/data/hariniimages/457286614_920750633416727_9221125093383415573_n.jpg" },
    { "src" : "/data/hariniimages/457345452_7554808997954626_2760155467370807571_n.jpg" },
    { "src" : "/data/hariniimages/457367131_859802932882571_6207863051852297663_n.jpg" },
    { "src" : "/data/hariniimages/457579913_1205783034099366_3611289934403075698_n.png" },
    { "src" : "/data/hariniimages/IMG_20240908_115537_909.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115549_256.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115653_822.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115658_340.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115703_141.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115708_689.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115711_659.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115731_526.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115754_356.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115756_582.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115801_628.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115806_574.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115808_287.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115810_186.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115533_458.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115555_955.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115559_035.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115601_709.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115614_790.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115643_334.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115717_564.jpg" },
    { "src" : "/data/hariniimages/IMG_20240908_115743_034.jpg" }
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dela+Gothic+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle/>
      <AppText>Memories with Harini</AppText>
      <Carousel data={slides}/>
    </>
  );
}
