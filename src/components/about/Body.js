import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DownloadButton from "./DownloadButton";

const Body = () => {
  return (
    <div>
      <Background>
        <Container>
          <Text>
            <Column>
              <Subtitle>About</Subtitle>
              <Story>
                <p>
                  Have you found your passion? After seven years in various
                  sales roles, I've recently switched to programming. Although
                  enjoying success in my previous career, it wasn't where my
                  heart was at. I can now say I have found my passion and I'm
                  eager to continue on this path. My previous experience brings
                  with it well developed transferable softskills.
                  <br />
                  <br />
                  Since the beginning of this year I have learned and applied
                  the JavaScript ecosystem. As you are reading this, chances are
                  I'm working on a new project or studying the depths of a
                  framework.
                </p>
              </Story>
              <Subtitle>Contact Details</Subtitle>
              <p>
                Mobile: <span>+316 412 44 720</span>
              </p>
              <p>
                Email: <span>tobiasmaas@live.com</span>
              </p>
              <Socials>
                <Link to="/">Linkedin</Link> / <Link to="/">Github</Link>
              </Socials>
            </Column>
            <Column>
              <Subtitle>Curicculum Vitae</Subtitle>
              <Cv>
                <ul>
                  <li>
                    <span>
                      Self-taught coder <i class="fas fa-circle"></i> Utrecht
                    </span>
                    JavaScript & React developer
                    <br />
                    Februari 2020 - Ongoing
                  </li>
                  <li>
                    <span>
                      Lepaya <i class="fas fa-circle"></i> Amsterdam
                    </span>
                    Learning & Development consultant
                    <br />
                    June 2019 - Februari 2020
                  </li>
                  <li>
                    <span>
                      Pepperminds <i class="fas fa-circle"></i> Netherlands
                    </span>
                    Head of Growth
                    <br />
                    March 2018 - June 2019
                  </li>
                  <li>
                    <span>
                      Pepperminds <i class="fas fa-circle"></i> Utrecht &
                      Amsterdam
                    </span>
                    Branch Manager
                    <br />
                    Januari 2017 - March 2018
                  </li>
                  <li>
                    <span>
                      Pepperminds <i class="fas fa-circle"></i> Netherlands
                    </span>
                    Sales Trainer
                    <br />
                    August 2015 - Januari 2017
                  </li>
                  <li>
                    <span>
                      Pepperminds <i class="fas fa-circle"></i> Utrecht
                    </span>
                    Sales Manager
                    <br />
                    September 2014 - August 2015
                  </li>
                  <li>
                    <span>
                      Pepperminds <i class="fas fa-circle"></i> Utrecht
                    </span>
                    Sales Agent
                    <br />
                    Januari 2013 - September 2014
                  </li>
                  <li>
                    <span>
                      Spanish by the Sea <i class="fas fa-circle"></i> Panama &
                      Costa Rica
                    </span>
                    Hostel & School Manager
                    <br />
                    March 2014 - Juli 2014
                  </li>
                </ul>
                <DownloadButton />
              </Cv>
            </Column>
          </Text>
        </Container>
      </Background>
    </div>
  );
};

const Cv = styled.div``;

const Story = styled.div`
  margin-bottom: 4rem;
`;

const Socials = styled.div`
  margin-top: 2rem;
  a {
    color: #b8b8b8;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const Subtitle = styled.div`
  font-weight: 600;
  color: #fff;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Column = styled.div`
  color: #b8b8b8;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  margin-right: 3rem;

  span {
    color: #fff;
    padding-left: 0.5rem;
  }
  li {
    margin-bottom: 2.5rem;
    span {
      padding-right: 1rem;
      padding-left: 0;
      i {
        font-size: 0.3rem;
        vertical-align: middle;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  }
`;

const Text = styled.div`
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
  max-width: 1200px;
  margin: auto;
  padding: 0.7rem 2rem;
  color: #b8b8b8;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
`;

export default Body;
