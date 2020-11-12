import React from "react";
import styled from "styled-components";
import profilepic from "../images/profilepic.png";

const Picture = () => {
  return (
    <Background>
      <Container>
        <ProfilePic>
          <img src={profilepic} alt="" />
        </ProfilePic>
      </Container>
    </Background>
  );
};

const ProfilePic = styled.div`
  max-width: 400px;
  margin: auto;
  padding-bottom: 4rem;
  padding-top: 4rem;
  img {
    border-radius: 50%;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Background = styled.div`
  background: #2a2a2a;
`;

export default Picture;
