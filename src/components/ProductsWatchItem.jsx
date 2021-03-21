import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import scrollTop from '../utils/scrollTop';
import Button from './Button';
import Title from './Title';

import {useDispatch, useSelector} from 'react-redux';
import {setChosenProduct, setSize} from '../redux/actions/products';
import {addCartItem} from '../redux/actions/cart';

const ProductsWatch = styled.div`
  background-color: ${(props) => (props.name && props.name.includes('Black') ? '#000' : '#EBE6E8')};
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

const ProductsWatchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 150px;
`;

const ProductsWatchLeft = styled.div`
  img {
    position: relative;
    display: block !important;
    margin: 0 auto !important;
    width: 480px !important;
    height: 570px;
  }
  width: 44%;
  .slick-dots {
    position: absolute;
    top: 0;
    li {
      background: #000;
      button {
        background: #000;
      }
    }
  }
  .slick-arrow {
    position: absolute;
    z-index: 100;
    right: -35px;
  }
  .slick-prev {
    left: -60px;
  }
  .slick-dots li button:before {
    font-size: 0;
  }
  .slick-active {
    button {
      &:before {
        background: #000;
      }
    }
  }
  .slick-dots {
    position: absolute;
    top: 105%;
    li {
      background: transparent;

      button {
        width: 23px;
        height: 23px;
        border: 3px solid #000;
        border-radius: 100%;
        background: #fff;
        padding: 0;
        &:before {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          text-align: center;
          position: static;
          transition: all 0.3s ease;
          width: 9px;
          height: 9px;
          border-radius: 100%;
        }
      }
    }
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 55px;
    color: ${(props) => (props.name && props.name.includes('Black') ? '#fff' : '#202020')};
    opacity: 1;
  }
`;

const ProductWatchRight = styled.div`
  width: 44%;
  display: flex;
  flex-direction: column;
`;

const ProductWatchPrice = styled.span`
  font-size: 28px;
  letter-spacing: 1px;
  background: ${(props) => (props.name && props.name.includes('Black') ? '#fff' : '#000')};
  width: 170px;
  text-align: center;
  padding: 8px;
  color: ${(props) => (props.name && props.name.includes('Black') ? '#000' : '#ebe6e8')};
  border-radius: 25px;
`;

const ProductWatchDelivery = styled.span`
  color: ${(props) => (props.name && props.name.includes('Black') ? '#fff' : '#000')};
  opacity: 0.6;
  letter-spacing: 1px;
  font-size: 18px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid #9c9eaf;
`;

const ProductsWatchDescr = styled.p`
  padding-top: 25px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 300;
  color: ${(props) => (props.name && props.name.includes('Black') ? '#fff' : '#000')};
`;

const ProductWatchBottom = styled.div`
  display: flex;
  align-items: center;
`;

const ProductWatchTypeName = styled.h4`
  margin-top: 20px;
  color: #797a8c;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const ProductWatchSizes = styled.div`
  display: flex;
  align-items: center;
`;

const ProductWatchSize = styled.a`
  margin-right: 7px;
  width: 39px;
  height: 39px;
  border-radius: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: ${(props) =>
  props.active
    ? props.name && props.name.includes('Black')
    ? '#fff'
    : '#000'
    : props.name && props.name.includes('Black')
    ? '#474852'
    : '#fff'};
  color: ${(props) =>
  props.active
    ? props.name && props.name.includes('Black')
    ? '#000'
    : '#fff'
    : props.name && props.name.includes('Black')
    ? '#fff'
    : '#797a8c'};
`;

const ProductsWatchItem = ({setVisibleCart}) => {
  const dispatch = useDispatch();
  const {chosenProduct, sizeType} = useSelector(({products}) => products);

  const onAddToCart = (item) => {
    dispatch(addCartItem(item));

    setVisibleCart(true);
  };

  const onSetSize = (size, e) => {
    e.preventDefault();
    dispatch(setSize(size));
  };

  React.useEffect(() => {
    const chosenProductRef = localStorage.getItem('chosenProduct');

    if (!chosenProduct) {
      dispatch(setChosenProduct(JSON.parse(chosenProductRef)));
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
    <ProductsWatch name={chosenProduct && chosenProduct[0].name}>
      <Container>
        <Title name={chosenProduct && chosenProduct[0].name}>
          {chosenProduct && chosenProduct[0].name}
        </Title>
        <ProductsWatchBlock>
          <ProductsWatchLeft name={chosenProduct && chosenProduct[0].name}>
            <Slider {...settings}>
              {chosenProduct &&
              chosenProduct[0].images.map((url, index) => (
                <img key={`${url}-${index}`} src={url} alt="futbolka"/>
              ))}
            </Slider>
          </ProductsWatchLeft>
          <ProductWatchRight>
            <ProductWatchPrice name={chosenProduct && chosenProduct[0].name}>
              {chosenProduct && chosenProduct[0].price.length > 3
                ? chosenProduct[0].price.charAt(0) + ' ' + chosenProduct[0].price.substr(1)
                : chosenProduct && chosenProduct[0].price}{' '}
              RUB
            </ProductWatchPrice>
            <ProductWatchDelivery name={chosenProduct && chosenProduct[0].name}>
              {`(Доставка по миру - ${
                chosenProduct && chosenProduct[0].delivery_world_price
              } RUB, по Украине - ${
                chosenProduct && chosenProduct[0].delivery_ukraine_price
              } UAH)`}
            </ProductWatchDelivery>
            {chosenProduct &&
            chosenProduct[0].description.map((item) => (
              <ProductsWatchDescr name={chosenProduct && chosenProduct[0].name}>
                {item}
              </ProductsWatchDescr>
            ))}
            <ProductWatchTypeName>Выберите размер:</ProductWatchTypeName>
            <ProductWatchSizes>
              {chosenProduct &&
              chosenProduct[0].sizes &&
              chosenProduct[0].sizes.map((size) => (
                <ProductWatchSize
                  href="/"
                  name={chosenProduct && chosenProduct[0].name}
                  active={size === sizeType}
                  onClick={(e) => onSetSize(size, e)}>
                  {size}
                </ProductWatchSize>
              ))}
            </ProductWatchSizes>

            <ProductWatchBottom>
              <Button
                name={chosenProduct && chosenProduct[0].name}
                onClick={() => onAddToCart(chosenProduct && chosenProduct[0])}
                addToCart>
                Добавить в корзину
              </Button>
            </ProductWatchBottom>
          </ProductWatchRight>
        </ProductsWatchBlock>
      </Container>
    </ProductsWatch>
  );
};

export default ProductsWatchItem;
