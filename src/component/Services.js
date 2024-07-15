import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <TbTruckDelivery className="icon" />
            <h3>Super Fast And Free Delivery</h3>
          </div>
          <div className="services-2">
            <div>
              <MdSecurity className="icon" />
              <h3>Non-contact Shipping</h3>
            </div>
            <div>
              <GiReceiveMoney className="icon" />
              <h3>Money-back Guaranteed</h3>
            </div>
          </div>
          <div className="services-3">
            <RiSecurePaymentLine className="icon" />
            <h3>Super Secure Payment System</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  .services-2 {
    background-color: #fff;
    gap: 3rem;
    box-shadow: none;
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      gap: 1rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.bg};
      padding: 23px 0;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      h3 {
        margin-top: 0rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.helper};
  }
`;
