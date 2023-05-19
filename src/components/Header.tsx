import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import priceConvert from '../utils/priceConvert';
import { setCategory, setCategoryName } from '../redux/actions/products';
import { Auth, Cart, BurgerMenu, Categories, Logout } from '../components';
import { setVisibleCart } from '../redux/actions/cart';
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

const Header = React.memo(function Header() {
  const dispatch = useDispatch();
  const blockOutRef = React.useRef<HTMLDivElement>(null);
  const [visibleAuthBlock, setVisibleAuthBlock] = React.useState(false);
  const [auth, setAuth] = React.useState(false);

  const { category, chosenProduct, categoryName } = useSelector(
    (state: RootState) => state.products,
  );
  const { totalPrice, visibleCart } = useSelector((state: RootState) => state.cart);

  const [visibleBurgerMenu, setVisibleBurgerMenu] = React.useState(false);
  const [visibleLogout, setVisibleLogout] = React.useState(false);

  const escapeListener = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setVisibleAuthBlock(false);
        dispatch(setVisibleCart(false));
        setVisibleBurgerMenu(false);
        setVisibleLogout(false);
      }
    },
    [setVisibleBurgerMenu, dispatch],
  );
  const clickListener = React.useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;

      if (
        target?.className &&
        blockOutRef.current &&
        target?.className === blockOutRef.current.className
      ) {
        setVisibleAuthBlock(false);
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
    visibleCart || visibleAuthBlock || visibleBurgerMenu
      ? document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: hidden')
      : document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: auto');
  }, [visibleCart, visibleAuthBlock, visibleBurgerMenu]);

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
          visibleCart || visibleAuthBlock || visibleBurgerMenu || visibleLogout ? 'show' : ''
        }></BlockOut>
      <HeaderMain name={chosenProduct && chosenProduct.name}>
        <Logout setAuth={setAuth} show={visibleLogout} setVisibleLogout={setVisibleLogout} />
        <Auth visibleAuthBlock={visibleAuthBlock} setVisibleAuthBlock={setVisibleAuthBlock} />
        <HeaderWrapper>
          <Logo>
            <Link to="/">
              <img src={logoPng} alt="logo png" />
            </Link>
          </Logo>
          <Categories />
          <HeaderRight>
            {!auth ? (
              <HeaderImg onClick={() => setVisibleAuthBlock(!visibleAuthBlock)}>
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
