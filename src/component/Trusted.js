import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-silder">
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png"
              alt="Trsuted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="Trsuted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="Trsuted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="Trsuted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png"
              alt="Trsuted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="Trsuted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Trusted;

const Wrapper = styled.section`
  padding: 8rem 0 6rem;
  background-color: ${({ theme }) => theme.colors.bg};

  h3 {
    font-size: 2.8rem;
    font-weight: 600;
    text-align: center;
    color: #18181d;
    margin-bottom: 30px;
  }

  .brand-section-silder {
    display: flex;
    justify-content: center;
    gap: 9rem;
    align-items: center;
    flex-wrap: wrap;

    .slide {
      width: 120px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-silder {
      gap: 4rem;

      .slide {
        width: 120px;
      }
    }
  }
`;
