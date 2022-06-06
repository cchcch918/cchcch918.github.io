import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Chor Choon Heng</h1>
            <h5>Full Stack Developer</h5>
            <p>I build anything. I make things alive.</p>
          </HeroLeft>
          <HeroRight>
            <Image
              src='https://raw.githubusercontent.com/cchcch918/cchcch918.github.io/master/src/Assets/character.svg'
              alt='man'
            />
          </HeroRight>
          x``
        </HeroWrapper>
        <ScrollDown to='projects'>
          <ScrollLink>
            Scroll down
            <img
              src='https://raw.githubusercontent.com/cchcch918/cchcch918.github.io/master/src/Assets/scroll-down.svg'
              alt='scroll-down'
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
