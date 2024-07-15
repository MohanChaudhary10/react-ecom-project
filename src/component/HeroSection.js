import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";

const HeroSection = ({ data }) => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Welcome to</p>
          <h1 className="hero-heading">{data.name}</h1>
          <p className="hero-para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            eaque nostrum blanditiis cupiditate velit quo ab iusto sit
            consequatur quam optio minus, praesentium quos at impedit ea
            adipisci, ipsam vel.
          </p>
          <Link to="/products" className="btn">
            <Button className="hireme-btn btn">Shop Now</Button>
          </Link>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/hero.png" alt="hero" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    width: 16rem;
    display: inline;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    position: relative;

    /* &::after {
      content: "";
      position: absolute;
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      left: 48%;
      top: -4rem;
      z-index: -1;
    } */
  }

  .hero-img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    /* picture::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    } */
  }
`;

export default HeroSection;
