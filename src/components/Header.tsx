import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import priceConvert from '../utils/priceConvert';
import { getProducts, setCategory, setCategoryName } from '../redux/actions/products';
import { Auth, Cart, BurgerMenu, Categories, Logout } from '../components';
import { RootState } from '../redux/reducers';
import { setAuth } from '../redux/actions/auth';
import {
  BlockOut,
  BurgerMenuButton,
  HeaderMain,
  HeaderRight,
  HeaderWrapper,
  LoginImg,
  Logo,
  ShoppingBlockImage,
} from '../styles/HeaderStyle';

import logoPng from '../assets/img/logo-2.png';
import authSvg from '../assets/img/auth.svg';
import shopCart from '../assets/img/shopping-cart.svg';
import menuBurgerSvg from '../assets/img/menu-burger.svg';
import userSvg from '../assets/img/user.svg';
interface IHeader {
  categoriesNames: Array<string>;
  categoriesNamesEng: Array<string>;
  visibleCart: boolean;
  setVisibleCart: (visible: boolean) => void;
}

const Header: React.FC<IHeader> = ({
  categoriesNames,
  categoriesNamesEng,
  visibleCart,
  setVisibleCart,
}) => {
  const dispatch = useDispatch();
  const blockOutRef = React.useRef<HTMLDivElement>(null);

  const { category, chosenProduct, categoryName } = useSelector(
    (state: RootState) => state.products,
  );
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { totalPrice } = useSelector((state: RootState) => state.cart);
  const onSelectCategory = (type: string, name: string) => {
    dispatch(setCategory(type));
    dispatch(setCategoryName(name));
  };

  const [visibleAuthBlock, setVisibleAuthBlock] = React.useState(false);
  const [visibleBurgerMenu, setVisibleBurgerMenu] = React.useState(false);
  const [visibleLogout, setVisibleLogout] = React.useState(false);

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setVisibleAuthBlock(false);
        setVisibleBurgerMenu(false);
        setVisibleLogout(false);
      }
    },
    [setVisibleAuthBlock, setVisibleBurgerMenu],
  );
  const clickListener = React.useCallback(
    (e) => {
      if (
        e.target.className &&
        blockOutRef.current &&
        e.target.className === blockOutRef.current.className
      ) {
        setVisibleAuthBlock(false);
        setVisibleCart(false);
        setVisibleBurgerMenu(false);
        setVisibleLogout(false);
      }
    },
    [blockOutRef, setVisibleAuthBlock, setVisibleBurgerMenu, setVisibleCart],
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
    dispatch(getProducts(category));
  }, [dispatch, category]);

  React.useEffect(() => {
    visibleCart || visibleAuthBlock || visibleBurgerMenu
      ? document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: hidden')
      : document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: auto');
  }, [visibleCart, visibleAuthBlock, visibleBurgerMenu]);

  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    if (typeof token === 'string') {
      dispatch(setAuth(true));
    } else {
      dispatch(setAuth(false));
    }
  }, [dispatch]);

  return (
    <>
      <BlockOut
        ref={blockOutRef}
        show={
          visibleCart || visibleAuthBlock || visibleBurgerMenu || visibleLogout ? 'show' : ''
        }></BlockOut>
      <HeaderMain name={chosenProduct && chosenProduct[0].name}>
        <Logout show={visibleLogout} setVisibleLogout={setVisibleLogout} />
        <Auth
          show={visibleAuthBlock && true}
          visibleAuthBlock={visibleAuthBlock}
          setVisible={setVisibleAuthBlock}
        />
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
          <HeaderRight>
            {!isAuth ? (
              <LoginImg onClick={() => setVisibleAuthBlock(!visibleAuthBlock)}>
                <img src={userSvg} alt="user svg" />
              </LoginImg>
            ) : (
              <LoginImg onClick={() => setVisibleLogout(true)}>
                <img src={authSvg} alt="auth svg" />
              </LoginImg>
            )}
            <div>
              <ShoppingBlockImage onClick={() => setVisibleCart(!visibleCart)}>
                <img src={shopCart} alt="shop cart" />
                {priceConvert(totalPrice)} RUB
              </ShoppingBlockImage>
              <Cart show={visibleCart} visibleCart={visibleCart} setVisibleCart={setVisibleCart} />
            </div>
            <BurgerMenuButton onClick={() => setVisibleBurgerMenu(!visibleBurgerMenu)}>
              <img src={menuBurgerSvg} alt="menuBurgerSvg" />
            </BurgerMenuButton>
            <BurgerMenu
              setVisibleBurgerMenu={setVisibleBurgerMenu}
              onSelectCategory={onSelectCategory}
              categoryName={categoryName}
              items={categoriesNames}
              category={category}
              links={categoriesNamesEng}
              show={visibleBurgerMenu}
            />
          </HeaderRight>
        </HeaderWrapper>
      </HeaderMain>
    </>
  );
};

export default Header;
