import styled from 'styled-components';
import { IBurgerMenu } from '../components/BurgerMenu';
import { device } from '../utils/deviceMedia';

export const BurgerMenuWrapper = styled.div`
  display: block;
  width: 330px;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  right: ${(props: IBurgerMenu) => (props.show ? '0' : '-400px')};
  z-index: 900;
  visibility: ${(props: IBurgerMenu) => (props.show ? 'visbility' : 'hidden')};
  background: #fff;
  transition: all 0.7s ease;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const BurgerMenuClose = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  top: 15px;
  right: 15px;
  font-size: 18px;
  opacity: 0.3;
  letter-spacing: 1px;
  cursor: pointer;
  img {
    margin-left: 10px;
    width: 21px;
    height: 21px;
  }
`;
