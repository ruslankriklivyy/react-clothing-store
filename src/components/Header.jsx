import React from 'react';
import styled from 'styled-components';
import priceConvert from '../utils/priceConvert';
import { getProducts, setCategory, setCategoryName } from '../redux/actions/products';
import logoPng from '../assets/img/logo-2.png';
import shopCart from '../assets/img/shopping-cart.svg';
import Categories from './Categories';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import Login from './Login';

const HeaderWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 25px;
  position: relative;
`;

const HeaderMain = styled.div`
  width: 100%;
  height: 150px;
  background: #000;
`;

const Logo = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 2px solid #d7d7d7;
  height: 62px;
  img {
    position: absolute;
    display: block;
    left: 50%;
    transform: translate(-50%, 0);
    margin: 0 auto;
    width: 190px;
    height: 64px;
  }
`;

const ShoppingBlockImage = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const ShoppingBlock = styled.div`
  position: absolute;
  top: 105px;
  right: 30px;
  height: 22px;
`;

const BlockOut = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 700;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visibility' : 'hidden')};
  transition: all 0.3s ease;
`;

const Header = ({ categoriesNames, categoriesNamesEng, visibleCart, setVisibleCart }) => {
  const dispatch = useDispatch();
  const blockOutRef = React.useRef();
  const { category, chosenProduct, categoryName } = useSelector(({ products }) => products);
  const { totalPrice } = useSelector(({ cart }) => cart);
  const onSelectCategory = (type, name) => {
    dispatch(setCategory(type));
    dispatch(setCategoryName(name));
  };

  React.useEffect(() => {
    dispatch(getProducts(category));
  }, [dispatch, category]);

  React.useEffect(() => {
    visibleCart
      ? document.querySelector('body').setAttribute('style', 'overflow: hidden')
      : document.querySelector('body').setAttribute('style', 'overflow: auto');
  }, [visibleCart]);

  return (
    <>
      <BlockOut ref={blockOutRef} show={visibleCart && 'show'}></BlockOut>
      <HeaderMain name={chosenProduct && chosenProduct[0].name}>
        <Login />
        <HeaderWrapper>
          <Logo>
            <img src={logoPng} alt="logo png" />
          </Logo>
          <Categories
            onSelectCategory={onSelectCategory}
            categoryName={categoryName}
            items={categoriesNames}
            category={category}
            links={categoriesNamesEng}
          />
          <ShoppingBlock>
            <ShoppingBlockImage onClick={() => setVisibleCart(!visibleCart)}>
              <img src={shopCart} alt="shop cart" />
              {priceConvert(totalPrice)} RUB
            </ShoppingBlockImage>
            <Cart
              blockOutRef={blockOutRef}
              show={visibleCart && 'show'}
              visibleCart={visibleCart}
              setVisibleCart={setVisibleCart}
            />
          </ShoppingBlock>
        </HeaderWrapper>
      </HeaderMain>
    </>
  );
};

export default Header;
