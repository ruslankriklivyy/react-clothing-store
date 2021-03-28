import React from 'react';
import styled from 'styled-components';
import priceConvert from '../utils/priceConvert';
import { getProducts, setCategory, setCategoryName } from '../redux/actions/products';
import logoPng from '../assets/img/logo-2.png';
import shopCart from '../assets/img/shopping-cart.svg';
import Categories from './Categories';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import Auth from './Auth';
import userSvg from '../assets/img/user.svg';
import { RootState } from '../redux/reducers';

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
  opacity: ${(props: any) => (props.show ? '1' : '0')};
  visibility: ${(props: any) => (props.show ? 'visibility' : 'hidden')};
  transition: all 0.3s ease;
`;

const LoginImg = styled.div`
  margin-right: 20px;
  img {
    display: block;
    width: 19px;
    height: 20px;
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  position: absolute;
  top: 105px;
  right: 30px;
  height: 22px;
`;

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
  const { totalPrice } = useSelector((state: RootState) => state.cart);
  const onSelectCategory = (type: string, name: string) => {
    dispatch(setCategory(type));
    dispatch(setCategoryName(name));
  };

  const [visibleAuthBlock, setVisibleAuthBlock] = React.useState(false);

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setVisibleAuthBlock(false);
      }
    },
    [setVisibleAuthBlock],
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
      }
    },
    [blockOutRef, setVisibleAuthBlock, setVisibleCart],
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
    visibleCart || visibleAuthBlock
      ? document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: hidden')
      : document.querySelector<HTMLElement>('body')?.setAttribute('style', 'overflow: auto');
  }, [visibleCart, visibleAuthBlock]);

  return (
    <>
      <BlockOut ref={blockOutRef} show={visibleCart || visibleAuthBlock ? 'show' : ''}></BlockOut>
      <HeaderMain name={chosenProduct && chosenProduct[0].name}>
        <Auth show={visibleAuthBlock && true} setVisible={setVisibleAuthBlock} />
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
            <LoginImg onClick={() => setVisibleAuthBlock(!visibleAuthBlock)}>
              <img src={userSvg} alt="user svg" />
            </LoginImg>
            <div>
              <ShoppingBlockImage onClick={() => setVisibleCart(!visibleCart)}>
                <img src={shopCart} alt="shop cart" />
                {priceConvert(totalPrice)} RUB
              </ShoppingBlockImage>
              <Cart
                show={visibleCart && true}
                visibleCart={visibleCart}
                setVisibleCart={setVisibleCart}
              />
            </div>
          </HeaderRight>
        </HeaderWrapper>
      </HeaderMain>
    </>
  );
};

export default Header;
