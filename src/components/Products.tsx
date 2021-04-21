import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import priceConvert from '../utils/priceConvert';
import { RootState } from '../redux/reducers';
import { Button, Title } from '.';
import {
  getOneCloth,
  getAllCloths,
  setProductId,
  setCategoryId,
  setCategoryName,
} from '../redux/actions/products';
import {
  ProductItemBlockout,
  ProductsItem,
  ProductsMain,
  ProductsWrapper,
} from '../styles/ProductsStyle';
import { Container } from '../styles/FooterStyle';

import arrowSvg from '../assets/img/arrow.svg';

const Products = () => {
  const dispatch = useDispatch();
  const { items, categoryName, categoryId } = useSelector((state: RootState) => state.products);

  const onSelectItem = (id: number) => {
    dispatch(setProductId(id));
    dispatch(getOneCloth(id));
  };

  React.useEffect(() => {
    const categoryNameRef = localStorage.getItem('categoryName');
    if (categoryNameRef) {
      dispatch(setCategoryName(JSON.parse(categoryNameRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('categoryName', JSON.stringify(categoryName));
  }, [categoryName]);

  React.useEffect(() => {
    const categoryIdRef = JSON.parse(localStorage.getItem('categoryId') || 'number');
    if (categoryId === 0) {
      dispatch(setCategoryId(categoryIdRef));
    }
  }, [dispatch, categoryId]);

  React.useEffect(() => {
    if (categoryId !== 0) {
      localStorage.setItem('categoryId', JSON.stringify(categoryId));
    }
  }, [categoryId]);

  React.useEffect(() => {
    dispatch(getAllCloths(categoryId));
  }, [dispatch, categoryId]);

  return (
    <ProductsWrapper>
      <Container>
        <Title>{categoryName}</Title>
        <ProductsMain>
          {items &&
            items.map(({ name, id, img, price }) => (
              <ProductsItem key={id}>
                <Link to={`/product/${id}`} onClick={() => onSelectItem(id)}>
                  <ProductItemBlockout>
                    <Button moreInfo>
                      <>
                        Подробнее <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
                      </>
                    </Button>
                  </ProductItemBlockout>
                  <span>{priceConvert(price)} RUB</span>
                  <img src={`http://localhost:5000/${img}`} alt="cloth img" />
                </Link>
                <Button className={'product-button'} product>
                  {name}
                </Button>
              </ProductsItem>
            ))}
        </ProductsMain>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
