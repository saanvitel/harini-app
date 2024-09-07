import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Carousel } from './carousel.jsx';

export default function Home() {
  const slides = [
    {
        "src" : "/data/hariniimages/456457878_1663455497807977_3392293573821402843_n.jpg"
    },
    {
        "src" : "/data/hariniimages/456601748_504799122400400_7591596280583473838_n.jpg"
    },
    {
        "src" : "/data/hariniimages/456606081_3125359384266674_7268094909739376437_n.jpg"
    },
    {
        "src" : "/data/hariniimages/456713481_907430831418460_2268687703775736694_n.jpg"
    },
    {
        "src" : "/data/hariniimages/456982778_842493554639211_378569624142519725_n.jpg"
    },
    {
        "src" : "/data/hariniimages/457286611_1074721583994326_9219735236107244096_n.jpg"
    },
    {
        "src" : "/data/hariniimages/457286614_920750633416727_9221125093383415573_n.jpg"
    },
    {
        "src" : "/data/hariniimages/457345452_7554808997954626_2760155467370807571_n.jpg"
    },
    {
        "src" : "/data/hariniimages/457367131_859802932882571_6207863051852297663_n.jpg"
    },
    {
        "src" : "/data/hariniimages/457579913_1205783034099366_3611289934403075698_n.png"
    }
]

  return (
      <>
        <GlobalStyle/>
          <Carousel data = {slides}/>
      </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// const AppBackground = styled.div`
//   margin: 0px;
//   width: 100vw;
//   height: 100vh;
// `;

const AppText = styled.p`
  color: black;
  margin: 0px;
`;