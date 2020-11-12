import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fryslingpic1 from "../images/fryslingpic1.png";
import fryslingpic2 from "../images/fryslingpic2.png";
import fryslingpic3 from "../images/fryslingpic3.png";
import fryslingpic4 from "../images/fryslingpic4.png";

const Frysling = () => {
  const [show, setShow] = useState({
    p1: { display: "block" },
    p2: { display: "none" },
    p3: { display: "none" },
    p4: { display: "none" },
  });
  const { p1, p2, p3, p4 } = show;

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
    window.open("https://www.frysling.nl", "_blank");
  };
  return (
    <div>
      <Background>
        <Container id="frysling">
          <p>Webshop</p>
          <Title>Frysling</Title>
          <Intro>
            <Column>
              <Subtitle>Overview</Subtitle>
              <p>
                For a vineyard in Friesland, I created a custom webshop. The
                goal was to make a website with a unique look and feel. Because
                of the boutique branding of this prize-winning Frysian wine
                house, style was more important than sales conversion.
                <br />
                <br />
                This website was made in vanilla JavaScript, without the use of
                frameworks. Payments are handled through the Mollie Order API.
                Once an order is paid for, the webhook is set up to create a
                shipment through the MyParcel API. A confirmation mail is then
                sent through the SendGrid mailer API. The admin panel which can
                only be accessed through authentication, also offers an
                automated order slip.
                <br />
                <br />
                The website has a fully automated custom giftcard system as well
                as the option to edit them from an admin panel in case a
                physical giftcard is sold or used on location. Giftcards are
                distributed through email and added to MongoDB after the
                purchase is completed. Using basic CRUD functionality, clients
                can spend their giftcards in the webshop.
              </p>
              <Subtitle>Code</Subtitle>
              <ul>
                <li>
                  <span>JavaScript:</span> 23.2%
                </li>
                <li>
                  <span>SCSS:</span> 38.6%
                </li>
                <li>
                  <span>HTML:</span> 31.2%
                </li>
                <li>
                  <span>CSS:</span> 7.0%
                </li>
              </ul>
            </Column>
            <Column>
              <Grid>
                <Tech>
                  <Subtitle>Technologies</Subtitle>
                  <p>
                    <ul>
                      <li>JavaScript</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>NodeJS</li>
                      <li>SCSS</li>
                      <li>Bootstrap</li>
                    </ul>
                  </p>
                </Tech>
                <div>
                  <Subtitle>API's</Subtitle>
                  <p>
                    <ul>
                      <li>Mollie Payments</li>
                      <li>MyParcel Shipment API</li>
                      <li>SendGrid Mailer</li>
                      <li>Spikkl Postal Code API</li>
                    </ul>
                  </p>
                </div>
              </Grid>
              <PortfolioItem>
                <img style={p1} src={fryslingpic1} alt="" />
                <img style={p2} src={fryslingpic2} alt="" />
                <img style={p3} src={fryslingpic3} alt="" />
                <img style={p4} src={fryslingpic4} alt="" />
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

export default Frysling;
