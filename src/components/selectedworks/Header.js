import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Background>
      <Container>
        <Text>
          {" "}
          My name is Tobias. I'm a self-taught fullstack developer with a seven
          year background in sales. I develop in JavaScript, NodeJS, ReactJS and
          many other technologies. I'm looking for a full-time job!
        </Text>

        <ReadMore>
          <Link to="/about">READ MORE</Link>
        </ReadMore>
      </Container>
    </Background>
  );
};

const ReadMore = styled.div`
  display: inline-block;
  border: 5px solid white;
  color: #fff;
  padding: 0.8rem 2.6rem;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  margin-top: 2rem;
`;

const Text = styled.div`
  display: block;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0.7rem 2rem;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 4rem;
`;

const Background = styled.div`
  background-color: #ca3c25;
`;

export default Header;
