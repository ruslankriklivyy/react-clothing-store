import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import priceConvert from '../utils/priceConvert';
import backSvg from '../assets/img/back.svg';
import plusSvg from '../assets/img/plus.svg';
import minusSvg from '../assets/img/remove.svg';
import removeSvg from '../assets/img/cancel.svg';
import {
  minusCartItem,
  plusCartItem,
  removeCartItem,
  removeSize,
  setCartItem,
  setStorageSize,
  setTotalPrice,
} from '../redux/actions/cart';
import { RootState } from '../redux/reducers';
import { device } from '../utils/deviceMedia';

const CartWrapper = styled.div`
  width: 380px;
  height: 100%;
  padding: 0 25px;
  overflow: auto;
  position: fixed;
  top: 0;
  right: ${(props: ICart) => (props.show ? '0' : '-400px')};
  z-index: 900;
  visibility: ${(props: ICart) => (props.show ? 'visbility' : 'hidden')};
  background: #fff;
  transition: all 0.7s ease;
  @media ${device.mobileL} {
    width: 100%;
  }
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
  padding-top: 25px;
  padding-bottom: 20px;
  text-align: left;
  letter-spacing: 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 54%;
    right: 7px;
    z-index: 100;
    width: 25%;
    margin: 0 auto;
    height: 2px;
    background: #000;
  }
`;

const CartItem = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
  border-top: 2px solid #ebeef1;
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
  padding: 40px 25px;
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

const CartItemRemove = styled.a`
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
`;

const CartItemParagraph = styled.p`
  display: block;
  margin-top: 20px;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
`;

interface ICart {
  visibleCart: boolean;
  setVisibleCart: (visible: boolean) => void;
  show: boolean;
}

const Cart: React.FC<ICart> = ({ visibleCart, setVisibleCart, show }) => {
  const dispatch = useDispatch();
  const cartBlock = React.useRef();
  const { cartItems, totalPrice, sizeTypes } = useSelector((state: RootState) => state.cart);
  const addedItems =
    cartItems &&
    Object.keys(cartItems).map((key) => {
      return cartItems[Number(key)].items && cartItems[Number(key)].items[0];
    });

  const onPlus = (id: number) => {
    dispatch(plusCartItem(id));
  };

  const onMinus = (id: number) => {
    dispatch(minusCartItem(id));
  };

  const onRemove = (id: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(removeCartItem(id));
    dispatch(removeSize(id));
  };

  React.useEffect(() => {
    const cartItemsRef = JSON.parse(localStorage.getItem('cartItems') || '{}');
    const totalPriceRef = localStorage.getItem('totalPrice');

    if (cartItemsRef) {
      const itemKeys = Object.keys(cartItemsRef);
      for (let name of itemKeys) {
        if (cartItemsRef.hasOwnProperty(Number(name))) {
          dispatch(setCartItem(cartItemsRef));
        }
      }
    }

    if (totalPriceRef) {
      dispatch(setTotalPrice(JSON.parse(totalPriceRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    const sizeTypesRef = localStorage.getItem('sizeTypes');

    if (sizeTypesRef) {
      dispatch(setStorageSize(JSON.parse(sizeTypesRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [cartItems, totalPrice]);

  React.useEffect(() => {
    localStorage.setItem('sizeTypes', JSON.stringify(sizeTypes));
  }, [sizeTypes]);

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
                    <CartItemRemove
                      href="/"
                      onClick={(e: React.MouseEvent<HTMLElement>) => onRemove(obj.id, e)}>
                      <img src={removeSvg} alt="remove svg" />
                    </CartItemRemove>
                  </CartItemLeft>
                  <CartItemRight>
                    <CartItemName>{obj.name}</CartItemName>
                    {sizeTypes[obj.id] && (
                      <>
                        <CartItemParagraph>Размер:</CartItemParagraph>
                        <div>{sizeTypes[obj.id].size[0]}</div>
                      </>
                    )}
                    <CartItemCount>
                      <CartItemParagraph>Количество:</CartItemParagraph>
                      <b>{cartItems[obj.id].items.length}</b>
                      <button onClick={() => onPlus(obj.id)}>
                        <img src={plusSvg} alt="plus svg" />
                      </button>
                      <button onClick={() => onMinus(obj.id)}>
                        <img src={minusSvg} alt="minus svg" />
                      </button>
                    </CartItemCount>
                    <CartItemTotalPrice>
                      {priceConvert(cartItems[obj.id].totalPrice)} RUB
                    </CartItemTotalPrice>
                  </CartItemRight>
                </CartItem>
              </>
            ),
        )}
      <CartItemBottom>
        <span>Итого:</span> <b>{priceConvert(totalPrice)} RUB</b>
      </CartItemBottom>
    </CartWrapper>
  );
};

export default Cart;
