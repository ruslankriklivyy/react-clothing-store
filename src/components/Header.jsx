import React from 'react';
import styled from 'styled-components';
import { getProducts, setCategory, setCategoryName } from '../redux/actions/products';
import logoPng from '../assets/img/logo-2.png';
import shopCart from '../assets/img/shopping-cart.svg';
import Categories from './Categories';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

const HeaderWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
`;

const HeaderMain = styled.div`
  width: 100%;
  height: 120px;
  background: #000;
`;

const Logo = styled.div`
  width: 180px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ShoppingCart = styled.div`
  height: 22px;
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
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
  const { category, choosenProduct, categoryName } = useSelector(({ products }) => products);
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
      <BlockOut show={visibleCart && 'show'}></BlockOut>
      <HeaderMain name={choosenProduct && choosenProduct[0].name}>
        <Cart
          show={visibleCart && 'show'}
          visibleCart={visibleCart}
          setVisibleCart={setVisibleCart}
        />
        <Container>
          <HeaderWrapper>
            <Logo>
              <img src={logoPng} alt="logo png" />
            </Logo>
            <Categories
              onSelectCategory={onSelectCategory}
              categoryName={categoryName}
              items={categoriesNames}
              links={categoriesNamesEng}
            />
            <ShoppingCart>
              <span onClick={() => setVisibleCart(!visibleCart)}>
                <img src={shopCart} alt="shop cart" />
                {totalPrice} RUB
              </span>
            </ShoppingCart>
          </HeaderWrapper>
        </Container>
      </HeaderMain>
    </>
  );
};

export default Header;
