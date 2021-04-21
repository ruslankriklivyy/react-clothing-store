import React from 'react';
import { Route } from 'react-router-dom';

import { Header, Promo, Products, ProductsWatchItem, Footer } from '../components';

const categoriesNames = [
  'Memes.Jolybell',
  'Шапки',
  'Футболки',
  'Свитшоты',
  'Худи',
  'Рюкзаки',
  'Поло',
  'FQA',
];

const categoriesNamesEng = [
  'memes',
  'hats',
  't-shirts',
  'sweatshirts',
  'hoodies',
  'bags',
  'polo',
  'fqa',
];

const Home = () => {
  const [visibleCart, setVisibleCart] = React.useState(false);

  return (
    <>
      <Route
        path="/"
        render={() => (
          <Header
            visibleCart={visibleCart}
            setVisibleCart={setVisibleCart}
            categoriesNames={categoriesNames}
            categoriesNamesEng={categoriesNamesEng}
          />
        )}
      />
      <Route exact path="/" component={Promo} />
      <Route path="/category" component={Products} />
      <Route
        path={`/product/`}
        render={() => <ProductsWatchItem setVisibleCart={setVisibleCart} />}
      />
      <Route path="/" component={Footer} />
    </>
  );
};

export default Home;
