import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import backSvg from '../assets/img/back.svg';

const CartWrapper = styled.div`
  width: 360px;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  right: ${(props) => (props.show ? '0' : '-400px')};
  z-index: 900;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visbility' : 'hidden')};
  background: #fff;
  transition: all 0.6s ease;
`;

const CartHeader = styled.div`
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

const CartTitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
  padding: 25px 105px 0 25px;
  letter-spacing: 1px;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 68%;
    right: 7px;
    z-index: 100;
    width: 25%;
    margin: 0 auto;
    height: 2px;
    background: #000;
  }
`;

const CartItem = styled.div`
  padding: 10px 25px;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;

const CartItemLeft = styled.div`
  margin-right: 20px;
  width: 120px;
  height: 160px;
  border: 2px solid #ebeef1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
  }
`;

const CartItemRight = styled.div``;

const CartItemName = styled.h4`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

const CartItemPrice = styled.span`
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 1px;
`;

const Cart = ({ visibleCart, setVisibleCart, show }) => {
  const { cartItems } = useSelector(({ cart }) => cart);
  const addedItems = Object.keys(cartItems).map((key) => {
    return cartItems[key].items[0];
  });

  return (
    <CartWrapper show={show}>
      {/* <CartBlockOut></CartBlockOut> */}
      <CartHeader>
        <button onClick={() => setVisibleCart(!visibleCart)}>
          <img src={backSvg} alt="back svg" />
          Продолжить покупки
        </button>
        <CartTitle>Мои покупки</CartTitle>
      </CartHeader>
      {addedItems.map((obj) => (
        <CartItem>
          <CartItemLeft>
            <img src={obj.images[0]} alt="product img" />
          </CartItemLeft>
          <CartItemRight>
            <CartItemName>{obj.name}</CartItemName>
            <CartItemPrice>{obj.price} RUB</CartItemPrice>
          </CartItemRight>
        </CartItem>
      ))}
    </CartWrapper>
  );
};

export default Cart;
