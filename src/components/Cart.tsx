import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import priceConvert from '../utils/priceConvert';
import backSvg from '../assets/img/back.svg';
import plusSvg from '../assets/img/plus.svg';
import minusSvg from '../assets/img/remove.svg';
import removeSvg from '../assets/img/cancel.svg';
import emptyCartSvg from '../assets/img/empty-cart.png';
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
import {
  CartHeader,
  CartItem,
  CartItemRemove,
  CartTitle,
  CartWrapper,
  CartItemLeft,
  CartItemRight,
  CartItemName,
  CartItemParagraph,
  CartItemCount,
  CartItemTotalPrice,
  CartItemBottom,
  EmptyCart,
} from '../styles/CartStyle';

export interface ICart {
  visibleCart: boolean;
  setVisibleCart: (visible: boolean) => void;
  show: boolean;
}

const Cart: React.FC<ICart> = ({ visibleCart, setVisibleCart, show }) => {
  const dispatch = useDispatch();
  const cartBlock = React.useRef();
  const [animate, setAnimate] = React.useState(false);
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
      {addedItems?.length > 0 ? (
        addedItems?.map((obj) => (
          <>
            <CartItem key={obj.id}>
              <CartItemLeft>
                <img src={obj.images && obj.images[0]} alt="product img" />
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
        ))
      ) : (
        <EmptyCart>
          <img src={emptyCartSvg} alt="emptyCart svg" />
        </EmptyCart>
      )}
      <CartItemBottom>
        <span>Итого:</span> <b>{priceConvert(totalPrice)} RUB</b>
      </CartItemBottom>
    </CartWrapper>
  );
};

export default Cart;
