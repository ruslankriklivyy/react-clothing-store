import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import backSvg from '../assets/img/back.svg';
import { minusCartItem, plusCartItem } from '../redux/actions/cart';

const CartWrapper = styled.div`
  width: 360px;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  right: ${(props) => (props.show ? '0' : '-400px')};
  z-index: 900;
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
    width: 100px;
    height: 120px;
  }
`;

const CartItemRight = styled.div``;

const CartItemName = styled.h4`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

const CartItemCount = styled.div`
  display: block;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
`;

const CartItemPrice = styled.div`
  display: block;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  color: #000;
`;

const CartItemTotalPrice = styled.div`
  display: block;
  font-weight: 600;
  font-size: 24px;
`;

const Cart = ({ visibleCart, setVisibleCart, show, blockOutRef }) => {
  const dispatch = useDispatch();
  const cartBlock = React.useRef();
  const { cartItems, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const addedItems = Object.keys(cartItems).map((key) => {
    return cartItems[key].items && cartItems[key].items[0];
  });

  const onPlus = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinus = (id) => {
    dispatch(minusCartItem(id));
  };

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setVisibleCart(false);
      }
    },
    [setVisibleCart],
  );
  const clickListener = React.useCallback(
    (e) => {
      if (e.target.className && e.target.className === blockOutRef.current.className) {
        setVisibleCart(false);
      }
    },
    [setVisibleCart, blockOutRef],
  );
  React.useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  return (
    <CartWrapper ref={cartBlock} show={show}>
      <CartHeader>
        <button onClick={() => setVisibleCart(!visibleCart)}>
          <img src={backSvg} alt="back svg" />
          Продолжить покупки
        </button>
        <CartTitle>Мои покупки</CartTitle>
      </CartHeader>
      {totalCount &&
        addedItems.map((obj) => (
          <CartItem key={obj.id}>
            <CartItemLeft>
              <img src={obj.images[0]} alt="product img" />
            </CartItemLeft>
            <CartItemRight>
              <CartItemName>{obj.name}</CartItemName>
              {console.log(cartItems[obj.id].items.length)}
              <CartItemCount>
                <b>{cartItems[obj.id].items.length}</b>
                <button onClick={() => onPlus(obj.id)}>+</button>
                <button onClick={() => onMinus(obj.id)}>-</button>
              </CartItemCount>
              <CartItemTotalPrice>{cartItems[obj.id].totalPrice} RUB</CartItemTotalPrice>
            </CartItemRight>
          </CartItem>
        ))}
    </CartWrapper>
  );
};

export default Cart;
