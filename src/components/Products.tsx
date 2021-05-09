import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import priceConvert from '../utils/priceConvert';
import { RootState } from '../redux/reducers';
import { Button, Title } from '.';
import {
  getAllCloths,
  setProductId,
  setCategoryId,
  setCategoryName,
  setChosenProduct,
  setCategory,
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
  const { items, categoryName, categoryId, category } = useSelector(
    (state: RootState) => state.products,
  );

  const onSelectItem = (id: number) => {
    const newItem = items.filter((item) => item.id === id);
    dispatch(setChosenProduct(newItem[0]));
    dispatch(setProductId(id));
  };

  React.useEffect(() => {
    dispatch(setCategoryId(categoryId));
  }, [dispatch, categoryId]);

  React.useEffect(() => {
    dispatch(getAllCloths(category));
  }, [dispatch, category]);

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
                      <>
                        Подробнее <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
                      </>
                    </Button>
                  </ProductItemBlockout>
                  <span>{priceConvert(price)} RUB</span>
                  <img src={images && images[0]} alt="cloth img" />
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
