import React from 'react';
import styled from 'styled-components';
import { Button } from '.';

const PromoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

const PromoMain = styled.div`
  h2 {
    font-weight: 700;
    font-size: 32px;
    text-transform: uppercase;
    color: #000;
    text-align: center;
  }
`;

const PromoBlocks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PromoBlockItem = styled.div`
  position: relative;
  margin-top: 20px;
  width: 400px;
  height: 400px;
  border-radius: 29px;
  background: #000;
  padding: 20px;
  text-align: center;
  h4 {
    padding-top: 140px;
    margin-bottom: 8px;
    font-weight: 600;
    color: #fff;
    font-size: 26px;
    text-transform: uppercase;
  }
  p {
    font-weight: 400;
    color: #fff;
    font-size: 18px;
    opacity: 0.8;
    letter-spacing: 1px;
    line-height: 1.3;
  }
  button {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 60px;
  }
`;

const promoItems = [
  {
    id: 0,
    title: 'Наш бренд дерзок',
    text: 'разве способен на такое обычный раб из тенденций толпы?',
  },
  {
    id: 0,
    title: 'Детали бренда - наше все',
    text: 'связь бренда и покупателя - наша философская позиция',
  },
  {
    id: 0,
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
              <Button>Перейти к покупке</Button>
            </PromoBlockItem>
          ))}
        </PromoBlocks>
      </Container>
    </PromoWrapper>
  );
};

export default Promo;
