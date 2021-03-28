import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: ${(props: IButton) => (props.product ? '2px solid #F2F4F6' : 'none')};
  outline: none;
  ${(props: IButton) => (props.addToCart ? 'margin-top: 30px' : '')};
  ${(props: IButton) => (props.addToCart ? 'background: #000' : 'background: #fff')};
  ${(props: IButton) => (props.name && props.name.includes('Black') ? 'background: #fff' : '')};
  ${(props: IButton) => (props.addToCart ? 'color: #fff' : 'color: #000')};
  ${(props: IButton) => (props.name && props.name.includes('Black') ? 'color: #000' : '')};
  font-weight: ${(props: IButton) =>
    props.product || props.moreInfo || props.addToCart ? '300' : '600'};
  font-size: ${(props: IButton) => (props.moreInfo || props.addToCart ? '18px' : '21px')};
  text-transform: ${(props: IButton) => (props.product || props.moreInfo ? 'none' : 'uppercase')};
  cursor: pointer;
  padding: ${(props: IButton) => (props.moreInfo ? '0' : '6px 30px')};
  ${(props: IButton) => (props.moreInfo ? 'padding-right: 25px' : '')};
  transition: all 0.6s ease;
  border-radius: ${(props: IButton) =>
    props.product || props.moreInfo || props.addToCart ? '28px' : '15px'};
  ${(props: IButton) => (props.product ? 'width: 100%' : '')};
  ${(props: IButton) => (props.registration ? 'width: 100%' : '')};
  ${(props: IButton) =>
    props.registration ? 'width: 100%' : props.moreInfo || props.addToCart ? 'width: 55%' : ''};
  ${(props: IButton) =>
    props.product || props.moreInfo || props.addToCart ? 'letter-spacing: 2px' : ''};
  ${(props: IButton) => (props.product ? 'height: 55px' : '')};
  ${(props: IButton) => (props.moreInfo || props.addToCart ? 'height: 50px' : '')};
`;

interface IButton {
  onClick?: () => void;
  children?: (string | Element)[] | React.ReactNode;
  registration?: boolean | null;
  product?: boolean | null;
  moreInfo?: boolean | null;
  className?: string | null;
  name?: string | null;
  addToCart?: boolean | null;
  props?: any | null;
  type?: string | null;
  disabled?: boolean | null;
}

const Button: React.FC<IButton> = ({
  onClick,
  children,
  registration,
  product,
  moreInfo,
  className,
  name,
  addToCart,
  type,
  disabled,
}) => {
  return (
    <ButtonWrapper
      type={type}
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
