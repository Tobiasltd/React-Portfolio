import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ homebtn }) => {
  return (
    <Wrapper>
      <div className="navbar">
        <Link to="/">
          <i className={homebtn}></i>
        </Link>
        <Menu>
          <Link to="/">Selected Works</Link>
          <Link to="/about">About me</Link>
        </Menu>
      </div>
    </Wrapper>
  );
};

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
  background-color: #2a2a2a;
`;

Navbar.propTypes = {
  homebtn: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  homebtn: "fas fa-ellipsis-v",
};

export default Navbar;
