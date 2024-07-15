import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <Link to="/" className="logo">
        KR <span> Store</span>
      </Link>
      <Navbar></Navbar>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.text};
    padding: 0 5px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 6rem;
    padding: 0 2rem;

    .logo {
      max-width: 70%;
    }
  }
`;

export default Header;
