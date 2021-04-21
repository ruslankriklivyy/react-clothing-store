import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '.';
import { Container } from '../styles/ProductsStyle';
import { PromoBlockItem, PromoBlocks, PromoMain, PromoWrapper } from '../styles/PromoStyles';

const promoItems = [
  {
    id: 0,
    title: 'Наш бренд дерзок',
    text: 'разве способен на такое обычный раб из тенденций толпы?',
  },
  {
    id: 1,
    title: 'Детали бренда - наше все',
    text: 'связь бренда и покупателя - наша философская позиция',
  },
  {
    id: 2,
    title: 'У нас есть только белый и черный. Остальное - оттенки',
    text: 'мы плены идеями максимализма',
  },
];

const Promo = () => {
  return (
    <PromoWrapper>
      <Container>
        <PromoMain>
          <h2>Почему именно наш бренд</h2>
        </PromoMain>
        <PromoBlocks>
          {promoItems.map(({ id, title, text }) => (
            <PromoBlockItem key={id}>
              <h4>{title}</h4>
              <p>{text}</p>
              <Link to="/category/memes">
                <Button>Перейти к покупке</Button>
              </Link>
            </PromoBlockItem>
          ))}
        </PromoBlocks>
      </Container>
    </PromoWrapper>
  );
};

export default Promo;
