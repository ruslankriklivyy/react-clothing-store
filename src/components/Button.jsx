import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: ${(props) => (props.product ? '2px solid #F2F4F6' : 'none')};
  outline: none;
  ${(props) => (props.addToCart ? 'margin-top: 30px' : '')};
  ${(props) => (props.addToCart ? 'background: #000' : 'background: #fff')};
  ${(props) => (props.name && props.name.includes('Black') ? 'background: #fff' : '')};
  ${(props) => (props.addToCart ? 'color: #fff' : 'color: #000')};
  ${(props) => (props.name && props.name.includes('Black') ? 'color: #000' : '')};
  font-weight: ${(props) => (props.product || props.moreInfo || props.addToCart ? '300' : '600')};
  font-size: ${(props) => (props.moreInfo || props.addToCart ? '18px' : '21px')};
  text-transform: ${(props) => (props.product || props.moreInfo ? 'none' : 'uppercase')};
  cursor: pointer;
  padding: ${(props) => (props.moreInfo ? '0' : '6px 30px')};
  ${(props) => (props.moreInfo ? 'padding-right: 25px' : '')};
  transition: all 0.6s ease;
  border-radius: ${(props) =>
    props.product || props.moreInfo || props.addToCart ? '28px' : '15px'};
  ${(props) => (props.product ? 'width: 100%' : '')};
  ${(props) => (props.registration ? 'width: 100%' : '')};
  ${(props) =>
    props.registration ? 'width: 100%' : props.moreInfo || props.addToCart ? 'width: 55%' : ''};
  ${(props) => (props.product || props.moreInfo || props.addToCart ? 'letter-spacing: 2px' : '')};
  ${(props) => (props.product ? 'height: 55px' : '')};
  ${(props) => (props.moreInfo || props.addToCart ? 'height: 50px' : '')};
`;

const Button = ({
  onClick,
  children,
  registration,
  product,
  moreInfo,
  className,
  name,
  addToCart,
}) => {
  return (
    <ButtonWrapper
      name={name}
      addToCart={addToCart}
      onClick={onClick}
      className={className}
      moreInfo={moreInfo}
      registration={registration}
      product={product}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
