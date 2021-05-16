import React from 'react';
import { Route } from 'react-router-dom';
import { ProductOnePage, PromoPage, ProductsPage } from '.';

import { Header, Footer } from '../components';

const Home = () => {
  // const [visibleCart, setVisibleCart] = React.useState(false);

  return (
    <>
      <Route path="/" render={() => <Header />} />
      <Route exact path="/" component={PromoPage} />
      <Route path="/category" component={ProductsPage} />
      <Route path={`/product/`} render={() => <ProductOnePage />} />
      <Route path="/" component={Footer} />
    </>
  );
};

export default Home;
