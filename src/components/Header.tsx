import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import priceConvert from '../utils/priceConvert';
import { setCategory, setCategoryId, setCategoryName } from '../redux/actions/products';
import { Auth, Cart, BurgerMenu, Categories, Logout } from '../components';
import { RootState } from '../redux/reducers';
import {
  BlockOut,
  BurgerMenuButton,
  HeaderMain,
  HeaderRight,
  HeaderWrapper,
  HeaderImg,
  Logo,
  ShoppingBlockImage,
} from '../styles/HeaderStyle';

import logoPng from '../assets/img/logo-2.png';
import authSvg from '../assets/img/auth.svg';
import shopCart from '../assets/img/shopping-cart.svg';
import menuBurgerSvg from '../assets/img/menu-burger.svg';
import userSvg from '../assets/img/user.svg';
import { Link } from 'react-router-dom';
import { setVisibleCart } from '../redux/actions/cart';
import { setVisibleAuth } from '../redux/actions/auth';

const Header = React.memo(function Header() {
  const dispatch = useDispatch();
  const blockOutRef = React.useRef<HTMLDivElement>(null);

  const { category, chosenProduct, categoryName } = useSelector(
    (state: RootState) => state.products,
  );
  const { isAuth, visibleAuth } = useSelector((state: RootState) => state.auth);
  const { totalPrice, visibleCart } = useSelector((state: RootState) => state.cart);

  const [visibleBurgerMenu, setVisibleBurgerMenu] = React.useState(false);
  const [visibleLogout, setVisibleLogout] = React.useState(false);

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        dispatch(setVisibleAuth(false));
        dispatch(setVisibleCart(false));
        setVisibleBurgerMenu(false);
        setVisibleLogout(false);
      }
    },
    [setVisibleBurgerMenu, dispatch],
  );
  const clickListener = React.useCallback(
    (e) => {
      if (
        e.target.className &&
        blockOutRef.current &&
        e.target.className === blockOutRef.current.className
      ) {
        dispatch(setVisibleAuth(false));
        dispatch(setVisibleCart(false));
        setVisibleBurgerMenu(false);
        setVisibleLogout(false);
      }
    },
    [blockOutRef, setVisibleBurgerMenu, dispatch],
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
    visibleCart || visibleAuth || visibleBurgerMenu
      ? document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: hidden')
      : document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: auto');
  }, [visibleCart, visibleAuth, visibleBurgerMenu]);

  React.useEffect(() => {
    const categoryNameRef = localStorage.getItem('categoryName');
    if (categoryNameRef) {
      dispatch(setCategoryName(JSON.parse(categoryNameRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    const categoryRef = localStorage.getItem('category');
    if (categoryRef) {
      dispatch(setCategory(JSON.parse(categoryRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('category', JSON.stringify(category));
  }, [category]);

  React.useEffect(() => {
    localStorage.setItem('categoryName', JSON.stringify(categoryName));
  }, [categoryName]);

  return (
    <>
      <BlockOut
        ref={blockOutRef}
        show={
          visibleCart || visibleAuth || visibleBurgerMenu || visibleLogout ? 'show' : ''
        }></BlockOut>
      <HeaderMain name={chosenProduct && chosenProduct.name}>
        <Logout show={visibleLogout} setVisibleLogout={setVisibleLogout} />
        <Auth />
        <HeaderWrapper>
          <Logo>
            <Link to="/">
              <img src={logoPng} alt="logo png" />
            </Link>
          </Logo>
          <Categories />
          <HeaderRight>
            {!isAuth ? (
              <HeaderImg onClick={() => dispatch(setVisibleAuth(!visibleAuth))}>
                <img src={userSvg} alt="user svg" />
              </HeaderImg>
            ) : (
              <HeaderImg onClick={() => setVisibleLogout(true)}>
                <img src={authSvg} alt="auth svg" />
              </HeaderImg>
            )}
            <div>
              <ShoppingBlockImage onClick={() => dispatch(setVisibleCart(true))}>
                <img src={shopCart} alt="shop cart" />
                {priceConvert(totalPrice)} RUB
              </ShoppingBlockImage>
              <Cart />
            </div>
            <BurgerMenuButton onClick={() => setVisibleBurgerMenu(!visibleBurgerMenu)}>
              <img src={menuBurgerSvg} alt="menuBurgerSvg" />
            </BurgerMenuButton>
            <BurgerMenu setVisibleBurgerMenu={setVisibleBurgerMenu} show={visibleBurgerMenu} />
          </HeaderRight>
        </HeaderWrapper>
      </HeaderMain>
    </>
  );
});

export default Header;
