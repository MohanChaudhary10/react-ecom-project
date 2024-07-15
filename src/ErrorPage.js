import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <img src="../images/error.svg" alt="error" className="err-img" />
      <h2>UH OH! You're Lost</h2>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back home age
      </p>
      <NavLink to="/">
        <Button className="btn"> Home</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: rgb(24 24 29);
    font-size: 4rem;
    font-weight: 700;
    white-space: normal;
    margin-bottom: 13px;
  }

  .err-img {
    max-width: 450px;
    margin-bottom: 40px;
  }

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default ErrorPage;
