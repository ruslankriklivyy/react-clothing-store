import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ProductItemBlockout, ProductsItemWrapper } from '../styles/ProductsStyle';
import ProductsItemsLoader from '../components/ProductsItemsLoader';
import { Button } from '.';
import priceConvert from '../utils/priceConvert';
import { RootState } from '../redux/reducers';

import arrowSvg from '../assets/img/arrow.svg';

interface IProductsItem {
  id: number;
  price: string;
  images: Array<string> | undefined;
  name: string;
  onSelectItem: (id: number) => void;
}

const ProductsItem: React.FC<IProductsItem> = ({ id, onSelectItem, price, images, name }) => {
  const { isFetching } = useSelector((state: RootState) => state.products);

  return (
    <>
      {!isFetching ? (
        Array(6)
          .fill(0)
          .map((_, index) => <ProductsItemsLoader key={index} />)
      ) : (
        <ProductsItemWrapper>
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
        </ProductsItemWrapper>
      )}
    </>
  );
};

export default ProductsItem;
