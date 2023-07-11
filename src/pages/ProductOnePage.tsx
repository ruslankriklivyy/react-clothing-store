import React from "react";
import Slider, { Settings } from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import scrollTop from "@/utils/scroll-top";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { setChosenProduct } from "@/redux/actions/products";
import { addCartItem, setSize, setVisibleCart } from "@/redux/actions/cart";
import formatPrice from "@/utils/format-price";
import { RootState } from "@/redux/reducers";
import { IProductsItem } from "@/interfaces/interfaces";

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
} from "@/styles/ProductOnePageStyle";
import { Container } from "@/styles/ProductsStyle";
import { MainLayout } from "@/layouts/MainLayout";

export interface IActive {
  active: boolean;
}

const ProductOnePage = () => {
  const dispatch = useDispatch();
  const { chosenProduct } = useSelector((state: RootState) => state.products);
  const { sizeTypes } = useSelector((state: RootState) => state.cart);

  const onAddToCart = (item: IProductsItem) => {
    dispatch(addCartItem(item));
    dispatch(setVisibleCart(true));
  };

  const onSetSize = (
    size: string,
    id: number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
    dispatch(setSize(size, id));
  };

  const settings: Settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease",
    touchThreshold: 100,
  };

  React.useEffect(() => {
    const chosenProductRef = JSON.parse(
      localStorage.getItem("chosenProduct") || "{}"
    );

    if (!chosenProduct) {
      dispatch(setChosenProduct(chosenProductRef));
    }
  }, [dispatch, chosenProduct]);

  React.useEffect(() => {
    localStorage.setItem("chosenProduct", JSON.stringify(chosenProduct));
  }, [chosenProduct]);

  React.useEffect(() => {
    scrollTop();
  }, []);

  return (
    chosenProduct && (
      <MainLayout>
        <ProductsWatch name={chosenProduct.name}>
          <Container>
            <Title name={chosenProduct.name}>{chosenProduct.name}</Title>
            <ProductsWatchBlock>
              <ProductsWatchLeft name={chosenProduct.name}>
                {
                  // @ts-ignore
                  <Slider {...settings}>
                    <>
                      {chosenProduct.images?.map((url, index) => (
                        <img
                          key={`${url}-${index}`}
                          src={url}
                          alt={`product image`}
                        />
                      ))}
                    </>
                  </Slider>
                }
              </ProductsWatchLeft>
              <ProductWatchRight>
                <ProductWatchPrice name={chosenProduct.name}>
                  {formatPrice(chosenProduct.price)} RUB
                </ProductWatchPrice>
                <ProductWatchDelivery name={chosenProduct?.name}>
                  {`(Доставка по миру - ${chosenProduct.delivery_world_price} RUB, по Украине - ${chosenProduct.delivery_ukraine_price} UAH)`}
                </ProductWatchDelivery>
                {chosenProduct?.description?.map((item: any) => (
                  <ProductsWatchDescr name={chosenProduct.name}>
                    {item}
                  </ProductsWatchDescr>
                ))}
                {chosenProduct.sizes && (
                  <ProductWatchTypeName>Выберите размер:</ProductWatchTypeName>
                )}
                <ProductWatchSizes>
                  {chosenProduct.sizes?.map((size, index) => (
                    <ProductWatchSize
                      href="/"
                      name={chosenProduct.name}
                      active={
                        sizeTypes[chosenProduct.id] &&
                        size === sizeTypes[chosenProduct.id].size[0]
                      }
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        onSetSize(size, chosenProduct.id, e)
                      }
                    >
                      {size}
                    </ProductWatchSize>
                  ))}
                </ProductWatchSizes>
                <ProductWatchBottom>
                  <Button
                    name={chosenProduct.name}
                    onClick={() => onAddToCart(chosenProduct)}
                    addToCart
                  >
                    Добавить в корзину
                  </Button>
                </ProductWatchBottom>
              </ProductWatchRight>
            </ProductsWatchBlock>
          </Container>
        </ProductsWatch>
      </MainLayout>
    )
  );
};

export default ProductOnePage;
