import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const MobileNavbar = ({ github, linkedin, menuicon, menuclose, homebtn }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Header>
        <Title>
          <Link to="/">
            <i className={homebtn}></i>
          </Link>
        </Title>
        <Icons>
          {!open && <i onClick={toggleMenu} className={menuicon}></i>}
          {open && <i onClick={toggleMenu} className={menuclose}></i>}
        </Icons>
      </Header>
      {open && (
        <Menu>
          <MenuItem>
            <Link onClick={toggleMenu} to="/">
              Selected Works
            </Link>
          </MenuItem>
          <MenuItem>
            <Link onClick={toggleMenu} to="/About">
              About me
            </Link>
          </MenuItem>
          <Socials>
            <Link to="www.google.com">
              <i className={linkedin}></i>
            </Link>
            <Link to="www.google.com">
              <i className={github}></i>
            </Link>
          </Socials>
        </Menu>
      )}
    </Wrapper>
  );
};

const Socials = styled.div`
  background: #3d3d3d;
  text-align: center;
  padding-top: 15px;
  a {
    margin-left: 25px;
    margin-right: 15px;
    font-size: 1.4rem;
  }
`;

const Menu = styled.div`
  display: block;
  list-style: none;
`;

const MenuItem = styled.div`
  background: #3d3d3d;
  display: list-item;
  text-align: center;
  list-style: none;
  padding: 10px 0;
  a {
    margin-left: 15px;
  }
`;

const Icons = styled.div`
  margin-inline-end: 25px;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-top: 10px;
  text-align: right;
  padding: 10px 0;
  i {
    font-size: 1.8rem;
  }
`;

const Title = styled.div`
  margin-inline-start: 25px;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-top: 10px;
  padding: 10px 0;
  i {
    font-size: 1.8rem;
  }
`;

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  background-color: #ca3c25;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

MobileNavbar.propTypes = {
  menuicon: PropTypes.string,
  menuclose: PropTypes.string,
  homebtn: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

MobileNavbar.defaultProps = {
  menuicon: "fas fa-bars pointer",
  menuclose: "fas fa-times pointer",
  homebtn: "fas fa-ellipsis-v",
  linkedin: "fab fa-linkedin",
  github: "fab fa-github-square",
};

export default MobileNavbar;
