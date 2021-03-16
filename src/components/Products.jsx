import React from 'react';
import styled from 'styled-components';
import { Button, Title } from '.';
import { setCategory, setChoosenProduct, setProductId } from '../redux/actions/products';

import arrowSvg from '../assets/img/arrow.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ProductsWrapper = styled.div`
  margin: 20px 0;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

const ProductsMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 130px;
`;

const ProductItemBlockout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 29px;
  opacity: 0;
  transition: all 0.6s ease;
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .more-arrow {
      position: absolute;
      width: 17px;
      height: 15px;
      top: 18px;
      right: -17px;
    }
  }
`;

const ProductsItem = styled.div`
  background: #fff;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 65px;
  &:hover .product-button {
    background: #000;
    color: #fff;
    border-color: #000;
  }
  &:hover ${ProductItemBlockout} {
    opacity: 1;
  }

  a {
    position: relative;
    border-radius: 29px;
    display: block;
    width: 380px;
    height: 430px;
    z-index: 100;
    box-shadow: 0 0 15px #e4e5e7;
    margin-bottom: 20px;
    cursor: default;

    img {
      position: absolute;
      top: 55px;
      left: 50%;
      transform: translate(-50%, 0);
      display: block;
      margin: 0 auto;
      width: 85%;
      height: 75%;
    }

    span {
      border-top-left-radius: 29px;
      border-bottom-right-radius: 29px;
      position: absolute;
      top: 0;
      left: 0;
      padding: 7px;
      width: 150px;
      z-index: 500;
      text-align: center;
      height: 45px;
      font-size: 25px;
      font-weight: 500;
      background-color: #000;
      color: #fff;
    }
  }
`;

const Products = () => {
  const dispatch = useDispatch();
  const { items, category, categoryName } = useSelector(({ products }) => products);

  React.useEffect(() => {
    const localStorageRef = localStorage.getItem('category');

    if (!category) {
      dispatch(setCategory(JSON.parse(localStorageRef)));
    }
  }, [dispatch, category]);

  React.useEffect(() => {
    localStorage.setItem('category', JSON.stringify(category));
  }, [category]);

  const onSelectItem = (id) => {
    const newItem = items && items.filter((item) => item.id === id);
    dispatch(setProductId(id));
    dispatch(setChoosenProduct(newItem));
  };

  return (
    <ProductsWrapper>
      <Container>
        <Title>{categoryName}</Title>
        <ProductsMain>
          {items &&
            items.map(({ name, id, images, price }) => (
              <ProductsItem key={id}>
                <Link to={`/product/${id}`} onClick={() => onSelectItem(id)}>
                  <ProductItemBlockout>
                    <Button moreInfo>
                      Подробнее <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
                    </Button>
                  </ProductItemBlockout>
                  <span>
                    {price.length > 3 ? price.charAt(0) + ' ' + price.substr(1) : price} RUB
                  </span>
                  <img src={images[0]} alt="cloth img" />
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
