import React, {useState} from "react";
import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

// Define your styled container
const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 600px;
  position: relative;
`;

// Define the styled Slide component
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

export const Carousel = ({ data }) => {
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
            fill // Replaces layout="fill"
            style={{ objectFit: 'cover', borderRadius: '0.5rem', boxShadow: '0px 0px 7px #666' }} // Adjusted style
            quality={100} // Optional: Adjust image quality
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
