import styled from "styled-components";
import { device } from "../utils/device-media";

export const ProductsWrapper = styled.div`
  margin: 20px 0;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

export const ProductsMain = styled.div`
  min-height: calc(100vh - 122px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 130px;
  @media ${device.laptopL} {
    justify-content: center;
  }
`;

export const ProductItemBlockout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 29px;
  opacity: 0;
  transition: all 0.6s ease;
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .more-arrow {
      display: block;
      position: absolute;
      width: 17px !important;
      height: 15px !important;
      top: 18px;
      left: 70%;
      padding: 0 !important;
    }
  }
`;

export const ProductsItemWrapper = styled.div`
  background: #fff;
  margin-right: 13px;
  margin-left: 13px;
  margin-bottom: 65px;
  &:hover .product-button {
    background: #000;
    color: #fff;
    border-color: #000;
  }
  &:hover ${ProductItemBlockout} {
    opacity: 1;
  }

  a {
    position: relative;
    border-radius: 29px;
    display: block;
    width: 395px;
    height: 450px;
    z-index: 100;
    margin-bottom: 20px;
    cursor: default;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      padding: 40px;
    }

    span {
      border-top-left-radius: 29px;
      border-bottom-right-radius: 29px;
      position: absolute;
      top: 0;
      left: 0;
      padding: 7px;
      width: 150px;
      z-index: 500;
      text-align: center;
      height: 45px;
      font-size: 25px;
      font-weight: 500;
      background-color: #000;
      color: #fff;
    }
  }
  @media ${device.mobileL} {
    margin-right: 0;
    margin-left: 0;
    a {
      width: 300px;
      height: 350px;
    }
  }
`;
