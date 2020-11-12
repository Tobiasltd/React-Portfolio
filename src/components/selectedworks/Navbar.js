import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as Llink } from "react-scroll";

const Navbar = ({ homebtn }) => {
  return (
    <Wrapper>
      <div id="navbar" className="navbar">
        <Link to="/">
          <i className={homebtn}></i>
        </Link>
        <Menu>
          <Link to="/">Selected Works</Link>
          <Link to="/about">About me</Link>
        </Menu>
        <ToTop>
          <Llink to="navbar" smooth={true} duration={1000}>
            <i class="fas fa-angle-up"></i>
          </Llink>
        </ToTop>
      </div>
    </Wrapper>
  );
};

const ToTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 2000;
  i {
    font-size: 2rem;
    :hover {
      transform: scale(1.3);
    }
  }
`;

const Menu = styled.div`
  display: block;
  a {
    line-height: 76px;
    margin-left: 2rem;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`;

const Wrapper = styled.div`
  background-color: #ca3c25;
`;

Navbar.propTypes = {
  homebtn: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  homebtn: "fas fa-ellipsis-v",
};

export default Navbar;
