import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import backSvg from '../assets/img/back.svg';
import plusSvg from '../assets/img/plus.svg';
import minusSvg from '../assets/img/remove.svg';
import removeSvg from '../assets/img/cancel.svg';
import {
  minusCartItem,
  plusCartItem,
  removeCartItem,
  setCartItem,
  setTotalPrice,
} from '../redux/actions/cart';

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
  position: relative;
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
    z-index: 200;
  }
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -10px;
    left: -10px;
    z-index: 200;
    width: 23px;
    height: 23px;
    border-radius: 100%;
    border: 1px solid #ebeef1;
    background: #fff;
    z-index: 600;
    img {
      display: block;
      opacity: 0.5;
      margin: 0 auto;
      width: 10px;
      height: 10px;
    }
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
  margin-top: 20px;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  b {
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-right: 8px;
    font-size: 14px;
    border-right: 2px solid #c1c1c1;
  }
  button {
    margin-top: 5px;
    margin-bottom: 5px;
    background: transparent;
    border: none;
    outline: none;
    width: 15px;
    height: 15px;
    margin-left: 6px;
    cursor: pointer;
    img {
      width: 8px !important;
      height: 8px !important;
    }
  }
`;

const CartItemTotalPrice = styled.div`
  display: block;
  font-weight: 400;
  font-size: 19px;
  margin-top: 10px;
  letter-spacing: 1px;
  text-align: right;
`;

const CartItemBottom = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  margin-top: 40px;
  border-top: 2px solid #000;
  padding: 40px 25px 0 25px;
  span {
    font-size: 19px;
    text-align: left;
    color: #000;
  }
  b {
    text-align: right;
    font-size: 32px;
    letter-spacing: 1px;
  }
`;

const Cart = ({ visibleCart, setVisibleCart, show, blockOutRef }) => {
  const dispatch = useDispatch();
  const cartBlock = React.useRef();
  const { cartItems, totalPrice } = useSelector(({ cart }) => cart);
  const addedItems =
    cartItems &&
    Object.keys(cartItems).map((key) => {
      return cartItems[key].items && cartItems[key].items[0];
    });

  const onPlus = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinus = (id) => {
    dispatch(minusCartItem(id));
  };

  const onRemove = (id) => {
    dispatch(removeCartItem(id));
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

  React.useEffect(() => {
    const localStorageRef = localStorage.getItem('cartItems');
    const localStorageRefTotalPrice = localStorage.getItem('totalPrice');

    if (localStorageRef) {
      const itemKeys = Object.keys(JSON.parse(localStorageRef));
      for (let name of itemKeys) {
        if (JSON.parse(localStorageRef.hasOwnProperty(name))) {
          dispatch(setCartItem(JSON.parse(localStorageRef)));
        }
      }
    }

    if (localStorageRefTotalPrice) {
      dispatch(setTotalPrice(JSON.parse(localStorageRefTotalPrice)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [cartItems, totalPrice]);

  return (
    <CartWrapper ref={cartBlock} show={show}>
      <CartHeader>
        <button onClick={() => setVisibleCart(!visibleCart)}>
          <img src={backSvg} alt="back svg" />
          Продолжить покупки
        </button>
        <CartTitle>Мои покупки</CartTitle>
      </CartHeader>
      {cartItems &&
        addedItems.map(
          (obj) =>
            obj && (
              <>
                <CartItem key={obj.id}>
                  <CartItemLeft>
                    <img src={obj.images[0]} alt="product img" />
                    <span onClick={() => onRemove(obj.id)}>
                      <img src={removeSvg} alt="remove svg" />
                    </span>
                  </CartItemLeft>
                  <CartItemRight>
                    <CartItemName>{obj.name}</CartItemName>
                    <CartItemCount>
                      <p>Количество:</p>
                      <b>{cartItems[obj.id].items.length}</b>
                      <button onClick={() => onPlus(obj.id)}>
                        <img src={plusSvg} alt="plus svg" />
                      </button>
                      <button onClick={() => onMinus(obj.id)}>
                        <img src={minusSvg} alt="minus svg" />
                      </button>
                    </CartItemCount>
                    <CartItemTotalPrice>{cartItems[obj.id].totalPrice} RUB</CartItemTotalPrice>
                  </CartItemRight>
                </CartItem>
              </>
            ),
        )}
      <CartItemBottom>
        <span>Итого:</span> <b>{totalPrice} RUB</b>
      </CartItemBottom>
    </CartWrapper>
  );
};

export default Cart;
