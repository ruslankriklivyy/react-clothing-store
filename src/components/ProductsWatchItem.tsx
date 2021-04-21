import React from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';

import scrollTop from '../utils/scrollTop';
import Button from './Button';
import Title from './Title';
import { setChosenProduct } from '../redux/actions/products';
import { addCartItem, setSize } from '../redux/actions/cart';
import priceConvert from '../utils/priceConvert';
import { RootState } from '../redux/reducers';
import { ProductsItem } from '../types/types';
import {
  ProductsWatch,
  ProductsWatchBlock,
  ProductsWatchDescr,
  ProductsWatchLeft,
  ProductWatchBottom,
  ProductWatchDelivery,
  ProductWatchPrice,
  ProductWatchRight,
  ProductWatchSize,
  ProductWatchSizes,
  ProductWatchTypeName,
} from '../styles/ProductsWatchItemStyle';
import { Container } from '../styles/ProductsStyle';

export interface IActive {
  active: boolean;
}

export interface IProductsWatchItem {
  setVisibleCart: (visible: boolean) => void;
}

const ProductsWatchItem: React.FC<IProductsWatchItem> = ({ setVisibleCart }) => {
  const dispatch = useDispatch();
  const { chosenProduct } = useSelector((state: RootState) => state.products);
  const { sizeTypes } = useSelector((state: RootState) => state.cart);

  const onAddToCart = (item: ProductsItem) => {
    dispatch(addCartItem(item));

    setVisibleCart(true);
  };

  const onSetSize = (size: string, id: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(setSize(size, id));
  };

  React.useEffect(() => {
    const chosenProductRef = JSON.parse(localStorage.getItem('chosenProduct') || '{}');

    if (!chosenProduct) {
      dispatch(setChosenProduct(chosenProductRef));
    }
  }, [dispatch, chosenProduct]);

  React.useEffect(() => {
    localStorage.setItem('chosenProduct', JSON.stringify(chosenProduct));
  }, [chosenProduct]);

  React.useEffect(() => {
    scrollTop();
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease',
    touchThreshold: 100,
  };

  return (
    chosenProduct &&
    chosenProduct[0] && (
      <ProductsWatch name={chosenProduct[0].name}>
        <Container>
          <Title name={chosenProduct[0].name}>{chosenProduct[0].name}</Title>
          <ProductsWatchBlock>
            <ProductsWatchLeft name={chosenProduct[0].name}>
              <Slider {...settings}>
                <img src={`http://localhost:5000/${chosenProduct[0].img}`} alt="futbolka" />
                {/* {chosenProduct[0].img.map((url, index) => (
                  <img key={`${url}-${index}`} src={url} alt="futbolka" />
                ))} */}
              </Slider>
            </ProductsWatchLeft>
            <ProductWatchRight>
              <ProductWatchPrice name={chosenProduct[0].name}>
                {priceConvert(chosenProduct[0].price)} RUB
              </ProductWatchPrice>
              <ProductWatchDelivery name={chosenProduct[0] && chosenProduct[0].name}>
                {`(Доставка по миру - ${chosenProduct[0].delivery_world_price} RUB, по Украине - ${chosenProduct[0].delivery_ukraine_price} UAH)`}
              </ProductWatchDelivery>
              {chosenProduct[0].info &&
                chosenProduct[0].info.map((item: any) => (
                  <ProductsWatchDescr name={chosenProduct[0].name}>
                    {item.description}
                  </ProductsWatchDescr>
                ))}
              <ProductWatchTypeName>Выберите размер:</ProductWatchTypeName>
              <ProductWatchSizes>
                {chosenProduct[0].sizes &&
                  chosenProduct[0].sizes.map((size, index) => (
                    <ProductWatchSize
                      href="/"
                      name={chosenProduct[0].name}
                      active={
                        sizeTypes[chosenProduct[0].id] &&
                        size === sizeTypes[chosenProduct[0].id].size[0]
                      }
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        onSetSize(size, chosenProduct[0].id, e)
                      }>
                      {size}
                    </ProductWatchSize>
                  ))}
              </ProductWatchSizes>
              <ProductWatchBottom>
                <Button
                  name={chosenProduct[0].name}
                  onClick={() => onAddToCart(chosenProduct[0])}
                  addToCart>
                  Добавить в корзину
                </Button>
              </ProductWatchBottom>
            </ProductWatchRight>
          </ProductsWatchBlock>
        </Container>
      </ProductsWatch>
    )
  );
};

export default ProductsWatchItem;
