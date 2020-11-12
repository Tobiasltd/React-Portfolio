import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loggerpic1 from "../images/loggerpic1.png";
import loggerpic2 from "../images/loggerpic2.png";

const ITLogger = () => {
  const [show, setShow] = useState({
    p1: { display: "block" },
    p2: { display: "none" },
  });
  const { p1, p2 } = show;

  const carousel = () => {
    setTimeout(function () {
      if (p1.display === "block") {
        setShow({
          ...show,
          p1: { display: "none" },
          p2: { display: "block" },
        });
      } else if (p2.display === "block") {
        setShow({
          ...show,
          p2: { display: "none" },
          p1: { display: "block" },
        });
      }
    }, 5000);
  };

  useEffect(() => {
    carousel();
    //eslint-disable-next-line
  }, [show]);

  const onClick = () => {
    window.open("https://enigmatic-hollows-86885.herokuapp.com/", "_blank");
  };
  const visitGithub = () => {
    window.open("https://github.com/Tobiasltd/reduxitlogger", "_blank");
  };
  return (
    <div>
      <Background>
        <Gradient />
        <Container id="itlogger">
          <p>Ticket system - dashboard</p>
          <Title>IT Logger</Title>
          <Intro>
            <Column>
              <Subtitle>Overview</Subtitle>
              <p>
                This project simulates an IT ticket system. Technicians and log
                messages are served via MongoDB and added, updated and deleted
                from the dashboard. Redux is used for context.
                <br />
                <br />A search bar is added to search specific logs or match
                technician names. This functionality is achieved through
                querying MongoDB.
              </p>
              <Tech>
                <Subtitle>Technologies</Subtitle>
                <p>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>NodeJS</li>
                  </ul>
                </p>
              </Tech>
              <Subtitle className="pointer" onClick={visitGithub}>
                Github <i className="fab fa-github"></i>
              </Subtitle>
              <p className="pointer" onClick={visitGithub}>
                Visit Github
              </p>
            </Column>
            <Column>
              <PortfolioItem>
                <img style={p1} src={loggerpic1} alt="" />
                <img style={p2} src={loggerpic2} alt="" />
                <VisitWebsite onClick={onClick}>Visit Website</VisitWebsite>
              </PortfolioItem>
            </Column>
          </Intro>
        </Container>
      </Background>
    </div>
  );
};

const Tech = styled.div``;

const Gradient = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(to left bottom, #fcb1a6 50%, #ff9999 50%);
`;

const Title = styled.div`
  font-size: 3rem;
  letter-spacing: 2px;
  color: #fff;
`;

const VisitWebsite = styled.div`
  display: inline-block;
  border: 5px solid white;
  color: #fff;
  padding: 0.8rem 2.6rem;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  margin-top: 2rem;
  a {
    color: #fff;
  }
`;

const PortfolioItem = styled.div`
  text-align: center;
  color: #000;
  padding: 4rem;
  i {
    font-size: 5rem;
  }
  @media (max-width: 701px) {
    padding: 0;
    padding-bottom: 2rem;
    padding-top: 2rem;
    border-bottom: 1px solid black;
  }
`;

const Subtitle = styled.div`
  font-weight: 1000;
  color: #fff;
  margin-top: 1rem;
  i {
    font-size: 1.2em;
  }
`;

const Column = styled.div`
  color: #b8b8b8;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  span {
    color: #fff;
  }
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: 701px) {
    grid-template-columns: 1fr;
  }
`;

const Background = styled.div`
  background: #2a2a2a;
  height: 100%;
  width: 100vw;
`;

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0.7rem 2rem;
  color: #b8b8b8;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
`;

export default ITLogger;
