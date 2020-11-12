import React from "react";
import styled from "styled-components";
import pdf from "./TobiasMaasResume.pdf";

const DownloadButton = () => {
  return (
    <Button>
      <a target="_blank" rel="noreferrer" href={pdf}>
        Download CV
      </a>
    </Button>
  );
};

const Button = styled.div`
  display: inline-block;
  border: 5px solid #fff;
  color: #fff;
  padding: 0.8rem 2.6rem;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  margin-bottom: 1rem;
  a {
    color: #fff;
  }
`;

export default DownloadButton;
