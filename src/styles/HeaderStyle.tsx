import styled from 'styled-components';
import { device } from '../utils/deviceMedia';

export const HeaderWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 25px;
  position: relative;
`;

export const HeaderMain = styled.div`
  width: 100%;
  height: 150px;
  background: #000;
  @media ${device.laptopL} {
    height: 73px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 2px solid #d7d7d7;
  height: 62px;
  img {
    position: absolute;
    display: block;
    left: 50%;
    transform: translate(-50%, 0);
    margin: 0 auto;
    width: 190px;
    height: 64px;
  }
  @media ${device.laptopL} {
    border-bottom: none;
    img {
      width: 120px;
      height: 35px;
      top: 20px;
      left: 70px;
    }
  }
`;

export const ShoppingBlockImage = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  @media ${device.laptopL} {
    margin-right: 30px;
    img {
      width: 23px;
      height: 23px;
      margin-right: 0;
    }

    font-size: 0;
  }
  @media ${device.mobileL} {
    margin-right: 15px;
  }
`;

export const BlockOut = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 700;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props: any) => (props.show ? '1' : '0')};
  visibility: ${(props: any) => (props.show ? 'visibility' : 'hidden')};
  transition: all 0.3s ease;
`;

export const LoginImg = styled.div`
  margin-right: 20px;
  img {
    display: block;
    width: 19px;
    height: 20px;
    cursor: pointer;
  }
  @media ${device.laptopL} {
    margin-right: 30px;
    img {
      width: 22px;
      height: 22px;
    }
  }
  @media ${device.mobileL} {
    margin-right: 15px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  position: absolute;
  top: 109px;
  right: 30px;
  height: 22px;
  @media ${device.laptopL} {
    top: 25px;
    right: 10px;
    align-items: center;
  }
`;

export const BurgerMenuButton = styled.div`
  display: none;
  width: 30px;
  cursor: pointer;
  img {
    display: block;
    width: 30px;
    height: 30px;
  }
  @media ${device.laptopL} {
    display: block;
  }
`;
