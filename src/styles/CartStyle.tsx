import styled from 'styled-components';
import { ICart } from '../components/Cart';
import { device } from '../utils/deviceMedia';

export const CartWrapper = styled.div`
  width: 380px;
  height: 100%;
  padding: 0 25px;
  overflow: auto;
  position: fixed;
  top: 0;
  right: ${(props: ICart) => (props.show ? '0' : '-400px')};
  z-index: 900;
  visibility: ${(props: ICart) => (props.show ? 'visbility' : 'hidden')};
  background: #fff;
  transition: all 0.7s ease;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const CartHeader = styled.div`
  button {
    justify-content: center;
    align-items: center;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 17px;
    text-align: center;
    display: flex;
    width: 100%;
    height: 120px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-bottom: 2px solid #ebeef1;
    img {
      width: 30px;
      height: 30px;
      transform: rotate(-180deg);
      margin-right: 15px;
    }
  }
`;

export const CartTitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
  padding-top: 25px;
  padding-bottom: 20px;
  text-align: left;
  letter-spacing: 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 54%;
    right: 7px;
    z-index: 100;
    width: 25%;
    margin: 0 auto;
    height: 2px;
    background: #000;
  }
`;

export const CartItem = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
  border-top: 2px solid #ebeef1;
`;

export const CartItemLeft = styled.div`
  position: relative;
  margin-right: 20px;
  width: 120px;
  height: 160px;
  border: 2px solid #ebeef1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 120px;
    z-index: 200;
  }
`;

export const CartItemRight = styled.div``;

export const CartItemName = styled.h4`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CartItemCount = styled.div`
  display: block;
  margin-top: 20px;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  b {
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-right: 8px;
    font-size: 14px;
    border-right: 2px solid #c1c1c1;
  }
  button {
    margin-top: 5px;
    margin-bottom: 5px;
    background: transparent;
    border: none;
    outline: none;
    width: 15px;
    height: 15px;
    margin-left: 6px;
    cursor: pointer;
    img {
      width: 8px !important;
      height: 8px !important;
    }
  }
`;

export const CartItemTotalPrice = styled.div`
  display: block;
  font-weight: 400;
  font-size: 19px;
  margin-top: 10px;
  letter-spacing: 1px;
  text-align: right;
`;

export const CartItemBottom = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  margin-top: 40px;
  border-top: 2px solid #000;
  padding: 40px 25px;
  span {
    font-size: 19px;
    text-align: left;
    color: #000;
  }
  b {
    text-align: right;
    font-size: 32px;
    letter-spacing: 1px;
  }
`;

export const CartItemRemove = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  left: -10px;
  z-index: 200;
  width: 23px;
  height: 23px;
  border-radius: 100%;
  border: 1px solid #ebeef1;
  background: #fff;
  z-index: 600;
  img {
    display: block;
    opacity: 0.5;
    margin: 0 auto;
    width: 10px;
    height: 10px;
  }
`;

export const CartItemParagraph = styled.p`
  display: block;
  margin-top: 20px;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
`;
