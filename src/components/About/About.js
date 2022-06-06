import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id='about'>
      <div className='Container'>
        <div className='SectionTitle'>About Me</div>
        <div className='BigCard'>
          <Image
            src='https://raw.githubusercontent.com/cchcch918/cchcch918.github.io/master/src/Assets/character.gif'
            alt='man'
          />
          <div className='AboutBio'>
            Hello! My name is <strong>Chor Choon Heng</strong>. A full stack
            developer from Malaysia, working as an IT specialist in Fintech
            industry. Currently seeking a full stack developer position that
            will allow me to explore more career options in IT sector.
          </div>
          <div className='AboutBio tagline2'>
            I confident using these following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className='tech'>
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
