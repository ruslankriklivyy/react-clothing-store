import styled from "styled-components";
import { IAuth } from "../components/Auth/Auth";
import { device } from "../utils/device-media";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 140px;
  right: 100px;
  z-index: 800;
  background: #fff;
  width: 350px;
  min-height: 410px;
  border-radius: 25px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  visibility: ${(props: IAuth) => (props.show ? "visible" : "hidden")};
  opacity: ${(props: IAuth) => (props.show ? "1" : "0")};
  transition: all 0.6s ease;
  @media ${device.laptopL} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${device.mobileL} {
    width: 300px;
  }
`;

export const CloseLoginForm = styled.div`
  position: absolute;
  top: 13px;
  right: 15px;
  z-index: 800;
  width: 17px;
  height: 17px;
  opacity: 0.8;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const RegistartionTitle = styled.h2`
  padding-top: 40px;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`;
