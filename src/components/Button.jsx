import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: ${(props) => (props.product ? '2px solid #F2F4F6' : 'none')};
  outline: none;
  background: #fff;
  color: #000;
  font-weight: ${(props) => (props.product || props.moreInfo ? '300' : '600')};
  font-size: ${(props) => (props.moreInfo ? '18px' : '21px')};
  text-transform: ${(props) => (props.product || props.moreInfo ? 'none' : 'uppercase')};
  cursor: pointer;
  padding: ${(props) => (props.moreInfo ? '0' : '6px 30px')};
  ${(props) => (props.moreInfo ? 'padding-right: 25px' : '')};
  transition: all 0.6s ease;
  border-radius: ${(props) => (props.product || props.moreInfo ? '28px' : '15px')};
  ${(props) => (props.product ? 'width: 100%' : '')};
  ${(props) => (props.moreInfo ? 'width: 55%' : '')};
  ${(props) => (props.product || props.moreInfo ? 'letter-spacing: 2px' : '')};
  ${(props) => (props.product ? 'height: 55px' : '')};
  ${(props) => (props.moreInfo ? 'height: 50px' : '')};
`;

const Button = ({ children, product, moreInfo, className }) => {
  return (
    <ButtonWrapper className={className} moreInfo={moreInfo} product={product}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
