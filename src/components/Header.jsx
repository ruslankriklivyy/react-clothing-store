import React from 'react';
import styled from 'styled-components';
import { getProducts, setCategory, setCategoryName } from '../redux/actions/products';
import logoPng from '../assets/img/logo-2.png';
import Categories from './Categories';
import { useDispatch, useSelector } from 'react-redux';

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

const Header = ({ categoriesNames, categoriesNamesEng }) => {
  const dispatch = useDispatch();
  const { category, choosenProduct, categoryName } = useSelector(({ products }) => products);
  const onSelectCategory = (type, name) => {
    dispatch(setCategory(type));
    dispatch(setCategoryName(name));
  };

  React.useEffect(() => {
    dispatch(getProducts(category));
  }, [dispatch, category]);

  return (
    <HeaderMain name={choosenProduct && choosenProduct[0].name}>
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
        </HeaderWrapper>
      </Container>
    </HeaderMain>
  );
};

export default Header;
