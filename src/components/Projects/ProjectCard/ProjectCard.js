import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import { Carousel } from "3d-react-carousal";

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <Carousel showArrows={true}>
              {list.images.map((image, index) => (
                <div>
                  <img src={image} />
                </div>
              ))}
            </Carousel>
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className='stackTitle'>Tech Stack -</span>
              <span className='tags'>{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              {list.github_url ? (
                <a
                  className='btn btn2 SecondarBtn'
                  href={list.github_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
              ) : (
                <></>
              )}

              {list.demo_url ? (
                <a
                  className='btn PrimaryBtn'
                  href={list.demo_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Demo ➜
                </a>
              ) : (
                <></>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
