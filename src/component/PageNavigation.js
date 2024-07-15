import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <Link to="/">Home </Link> / {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
  padding-left: 2rem;
  box-shadow: 0px 4px 6px -5px rgba(0, 0, 0, 0.1);

  a {
    font-size: 1.6rem;
    color:  ${({ theme }) => theme.colors.helper};
    padding: 0 5px;
  }
`;

export default PageNavigation;
