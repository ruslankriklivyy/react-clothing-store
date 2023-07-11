import styled from "styled-components";
import { device } from "./device-media";

export const LoginContent = styled.div`
  padding: 30px;
  form {
    width: 100%;
    height: 100%;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 45px;
    img {
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
  }
  @media ${device.mobileL} {
    padding: 35px 10px 10px 10px;
  }
`;

export const LoginFormItem = styled.div`
  margin-bottom: 25px;
  label {
    display: block;
    font-size: 17px;
    letter-spacing: 1px;
    color: #000;
    opacity: 0.8;
    margin-bottom: 4px;
  }
  input {
    width: 100%;
    height: 38px;
    font-size: 16px;
    letter-spacing: 1px;
    background: #f4f6f8;
    border: none;
    outline: none;
    padding: 15px;
    border-radius: 20px;
  }
`;

export const LoginOrRegistration = styled.span`
  position: relative;
  display: block;
  letter-spacing: 1px;
  width: 40px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  color: #000;
  opacity: 0.7;
  margin-top: 40px;
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 13px;
    z-index: 700;
    width: 15px;
    height: 1px;
    background: #000;
  }
  &::after {
    right: -13px;
  }
  &::before {
    left: -13px;
  }
`;

export const LoginRegistrationLink = styled.span`
  display: block;
  letter-spacing: 1px;
  font-weight: 500;
  width: 200px;
  margin: 35px auto 0 auto;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  @media ${device.mobileL} {
    margin-top: 15px;
    margin-bottom: 5px;
  }
`;

export const ValidateErrors = styled.span`
  display: block;
  margin-top: 5px;
  letter-spacing: 1px;
  opacity: 0.6;
  font-size: 14px;
`;
