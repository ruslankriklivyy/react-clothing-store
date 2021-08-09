import styled from 'styled-components';
import { device } from '../utils/deviceMedia';

export const PromoWrapper = styled.div`
  margin-top: 20px;
  min-height: calc(100vh - 122px);
  height: 100%;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

export const PromoMain = styled.div`
  h2 {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 45px;
    text-transform: uppercase;
    color: #000;
    text-align: center;
  }
`;

export const PromoBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media ${device.laptopL} {
    flex-direction: column;
  }
`;

export const PromoBlockItem = styled.div`
  position: relative;
  margin-top: 20px;
  width: 400px;
  min-height: 400px;
  border-radius: 29px;
  background: #000;
  padding: 20px;
  text-align: center;

  h4 {
    padding-top: 140px;
    margin-bottom: 8px;
    font-weight: 600;
    color: #fff;
    font-size: 26px;
    text-transform: uppercase;
  }
  p {
    font-weight: 400;
    color: #fff;
    font-size: 18px;
    opacity: 0.8;
    letter-spacing: 1px;
    line-height: 1.3;
  }
  button {
    width: 70%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 60px;
  }
  @media ${device.laptopL} {
    margin: 0 auto 15px auto;
  }
  @media ${device.mobile} {
    width: 100%;
    min-height: 300px;
    button {
      width: 90%;
      bottom: 20px;
    }
    h4 {
      padding-top: 70px;
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
  }
`;
