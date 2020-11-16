import React, { useState, useEffect } from "react";
import styled from "styled-components";
import githubpic1 from "../images/githubpic1.png";
import githubpic2 from "../images/githubpic2.png";

const GitHubFinder = () => {
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
    window.open("https://githubfinder9503.netlify.app/", "_blank");
  };
  const visitGithub = () => {
    window.open("https://github.com/Tobiasltd/reactgithubfinder", "_blank");
  };
  return (
    <div>
      <Background>
        <Gradient />
        <Container id="githubfinder">
          <p>Github API App</p>
          <Title>GitHub Finder</Title>
          <Intro>
            <Column>
              <Subtitle>Overview</Subtitle>
              <p>
                Making use of the GitHub API, this React app fetches GitHub
                profiles based on user input.
                <br />
                <br />
                RxJS is used to autocomplete the search input in the searchbar.
                Filter, debouncetime, mergemap and distinctUntillChanged are
                used with the observable.
              </p>
              <Tech>
                <Subtitle>Technologies</Subtitle>
                <p>
                  <ul>
                    <li>React</li>
                    <li>RxJS</li>
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
                <img style={p1} src={githubpic1} alt="" />
                <img style={p2} src={githubpic2} alt="" />
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
  background: linear-gradient(to left bottom, #ff7070 50%, #e4626f 50%);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
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

export default GitHubFinder;
