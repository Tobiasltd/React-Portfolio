import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import fryslingpic from "../images/fryslingpic1.png";
import mejsn from "../images/mejsn.png";
import mern from "../images/mernstack.png";
import reactrxjs from "../images/reactrxjs.png";
import mernredux from "../images/mernredux.png";
import gympic from "../images/gympic1.png";
import contactpic from "../images/contactpic2.png";
import githubpic from "../images/githubpic2.png";
import loggerpic1 from "../images/loggerpic1.png";
import { Link } from "react-scroll";

const Overview = () => {
  const [show, setShow] = useState({
    x1: { display: "grid" },
    x2: { display: "none" },
    x3: { display: "none" },
  });
  const { x1, x2, x3 } = show;

  const carousel = () => {
    setTimeout(function () {
      if (x1.display === "grid") {
        setShow({ ...show, x1: { display: "none" }, x2: { display: "grid" } });
      } else if (x2.display === "grid") {
        setShow({ ...show, x2: { display: "none" }, x3: { display: "grid" } });
      } else if (x3.display === "grid") {
        setShow({ ...show, x3: { display: "none" }, x1: { display: "grid" } });
      }
    }, 5000);
  };

  useEffect(() => {
    carousel();
    //eslint-disable-next-line
  }, [show]);

  return (
    <div>
      <Background>
        <Container>
          <ImgGrid style={x1} className="grid-2">
            <PortfolioItem>
              <img src={fryslingpic} alt="" />
              <img className="stack" src={mejsn} alt="" />
              <SeeProject>
                <Link to="frysling" smooth={true} duration={1000}>
                  See Project
                </Link>
              </SeeProject>
            </PortfolioItem>
            <PortfolioItem>
              <img src={gympic} alt="" />
              <img className="stack" src={mern} alt="" />
              <SeeProject>
                <Link to="reactgym" smooth={true} duration={1000}>
                  See Project
                </Link>
              </SeeProject>
            </PortfolioItem>
          </ImgGrid>

          <ImgGrid style={x2} className="grid-2">
            <PortfolioItem>
              {" "}
              <img src={loggerpic1} alt="" />
              <img className="stack" src={mernredux} alt="" />
              <SeeProject>
                <Link to="itlogger" smooth={true} duration={1000}>
                  See Project
                </Link>
              </SeeProject>
            </PortfolioItem>
            <PortfolioItem>
              {" "}
              <img src={contactpic} alt="" />
              <img className="stack" src={mern} alt="" />
              <SeeProject>
                <Link to="contactkeeper" smooth={true} duration={1000}>
                  See Project
                </Link>
              </SeeProject>
            </PortfolioItem>
          </ImgGrid>

          <ImgGrid style={x3} className="grid-2">
            <PortfolioItem>
              {" "}
              <img src={githubpic} alt="" />
              <img src={reactrxjs} alt="" />
              <SeeProject>
                <Link to="githubfinder" smooth={true} duration={1000}>
                  See Project
                </Link>
              </SeeProject>
            </PortfolioItem>
          </ImgGrid>
        </Container>
      </Background>
    </div>
  );
};

const SeeProject = styled.div`
  display: inline-block;
  border: 5px solid black;
  color: #000;
  padding: 0.8rem 2.6rem;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  margin-top: 2rem;
  a {
    color: #000;
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
    border-bottom: 1px solid black;
  }
`;

const ImgGrid = styled.div`
  margin-top: 15vh;
  grid-gap: 8rem;
  @media (max-width: 701px) {
    grid-gap: 4rem;
  }
  @media (max-width: 1000px) {
    display: grid !important;
  }
`;

const Background = styled.div`
  background: linear-gradient(to right bottom, #d9f3f0 50%, #ffc9c9 50%);
  height: 120vh;
  width: 100vw;
  @media (max-width: 1000px) {
    height: 100% !important;
  }
`;

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0.7rem 2rem;
  font-size: 2rem;
  font-weight: bold;
  img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 701px) {
      margin: 0;
    }
  }
`;

export default Overview;
