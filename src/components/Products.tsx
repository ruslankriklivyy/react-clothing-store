import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/reducers';
import {
  getAllCloths,
  setProductId,
  setCategoryId,
  setChosenProduct,
  setIsFetching,
} from '../redux/actions/products';
import { ProductsMain, ProductsWrapper } from '../styles/ProductsStyle';
import { Container } from '../styles/FooterStyle';
import { Title, ProductsItem } from '.';

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
            items.map(({ id, name, price, images }) => (
              <ProductsItem
                key={id}
                id={id}
                name={name}
                price={price}
                images={images}
                onSelectItem={onSelectItem}
              />
            ))}
        </ProductsMain>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
