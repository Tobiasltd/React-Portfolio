import React, { useState, useEffect } from "react";
import styled from "styled-components";
import gympic1 from "../images/gympic1.png";
import gympic2 from "../images/gympic2.png";
import gympic3 from "../images/gympic3.png";
import gympic4 from "../images/gympic4.png";
import gympic5 from "../images/gympic5.png";

const ReactGym = () => {
  const [show, setShow] = useState({
    p1: { display: "block" },
    p2: { display: "none" },
    p3: { display: "none" },
    p4: { display: "none" },
    p5: { display: "none" },
  });
  const { p1, p2, p3, p4, p5 } = show;

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
          p3: { display: "block" },
        });
      } else if (p3.display === "block") {
        setShow({
          ...show,
          p3: { display: "none" },
          p4: { display: "block" },
        });
      } else if (p4.display === "block") {
        setShow({
          ...show,
          p4: { display: "none" },
          p5: { display: "block" },
        });
      } else if (p5.display === "block") {
        setShow({
          ...show,
          p5: { display: "none" },
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
    window.open("https://calm-retreat-63628.herokuapp.com/", "_blank");
  };

  const visitGithub = () => {
    window.open("https://github.com/Tobiasltd/reactgym", "_blank");
  };
  return (
    <div>
      <Background>
        <Gradient />
        <Container id="reactgym">
          <p>Gym Reservation, Employee dashboard & Webshop mockup</p>
          <Title>React Gym</Title>
          <Intro>
            <Column>
              <Subtitle>Overview</Subtitle>
              <p>
                In order to master React, I created a mockup gym website using
                the MERN stack. The website features part of a webshop, a fully
                functioning reservation system, a blog and an employee
                dashboard.
                <br />
                <br />
                Making use of the useState, useReducer, useEffect and useContext
                hook, pages are served with data obtained from MongoDB through
                an express/nodeJS backend.
                <br />
                <br />
                The reservation system allows for making a reservation based on
                the city and weekday selected by the user. From the employee
                dashboard, the roster can be adjusted so that employees can
                decide how many spots each timeblock offers.
                <br />
                Although simple, the blog is also accessable from the employee
                dashboard. Employees with admin access can add blogs, edit them
                and delete them if they wish.
                <br />
                Products for the fanshop can also easily be edited, added or
                deleted through the employee dashboard.
                <br />
                <br />
                Feel free to make an account and look around as a user. If you
                want to access the employee dashboard use username:
                admin@gmail.com password: 123456. Feel free to use the
                dashboard, the data is backed up.
              </p>

              <Subtitle className="pointer" onClick={visitGithub}>
                Github <i className="fab fa-github"></i>
              </Subtitle>
              <p className="pointer" onClick={visitGithub}>
                Visit Github
              </p>
            </Column>
            <Column>
              <Grid>
                <Tech>
                  <Subtitle>Technologies</Subtitle>
                  <p>
                    <ul>
                      <li>React</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>NodeJS</li>
                      <li>SCSS</li>
                    </ul>
                  </p>
                </Tech>
                <div>
                  <Subtitle>Functionality</Subtitle>
                  <p>
                    <ul>
                      <li>Employee Dashboard</li>
                      <li>Booking system</li>
                      <li>Webshop</li>
                      <li>Blog page</li>
                    </ul>
                  </p>
                </div>
              </Grid>
              <PortfolioItem>
                <img style={p1} src={gympic1} alt="" />
                <img style={p2} src={gympic2} alt="" />
                <img style={p3} src={gympic3} alt="" />
                <img style={p4} src={gympic4} alt="" />
                <img style={p5} src={gympic5} alt="" />
                <VisitWebsite onClick={onClick}>Visit Website</VisitWebsite>
              </PortfolioItem>
            </Column>
          </Intro>
        </Container>
      </Background>
    </div>
  );
};

const Tech = styled.div`
  padding-left: 5rem;
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const Gradient = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(to left bottom, #ffc9c9 50%, #fcb1a6 50%);
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

export default ReactGym;
