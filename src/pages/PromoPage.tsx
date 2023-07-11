import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "@/components";
import { RootState } from "@/redux/reducers";
import { Container } from "@/styles/ProductsStyle";
import {
  PromoBlockItem,
  PromoBlocks,
  PromoMain,
  PromoWrapper,
} from "@/styles/PromoStyles";
import { MainLayout } from "@/layouts/MainLayout";

const PromoPage = () => {
  const { promoItems } = useSelector((state: RootState) => state.products);

  return (
    <MainLayout>
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
                <Link to="/category">
                  <Button>Перейти к покупке</Button>
                </Link>
              </PromoBlockItem>
            ))}
          </PromoBlocks>
        </Container>
      </PromoWrapper>
    </MainLayout>
  );
};

export default PromoPage;
