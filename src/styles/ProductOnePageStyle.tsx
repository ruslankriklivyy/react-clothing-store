import { device } from '../utils/deviceMedia';
import styled from 'styled-components';
import { IProductsItem } from '../interfaces/interfaces';
import { IActive } from '../pages/ProductOnePage';

export const ProductsWatch = styled.div`
  min-height: calc(100vh - 122px);
  background-color: ${(props: IProductsItem) =>
    props.name && props.name.includes('Black') ? '#000' : '#EBE6E8'};
  padding-bottom: 140px;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

export const ProductsWatchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 150px;
  @media ${device.laptopL} {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0;
  }
`;

export const ProductsWatchLeft = styled.div`
  width: 44%;

  img {
    display: block !important;
    margin: 0 auto !important;
    height: 570px;
    object-fit: contain;
  }

  .slick-slide {
    & > div {
      width: 100%;
      margin: 0 auto;
    }
  }
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
    right: -25px;
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
    color: ${(props: IProductsItem) =>
      props.name && props.name.includes('Black') ? '#fff' : '#202020'};
    opacity: 1;
  }

  @media ${device.desktopM} {
    .slick-prev {
      left: 130px;
    }
    .slick-next {
      right: 165px;
    }
    .slick-arrow {
      top: 105%;
    }
  }
  @media ${device.laptopL} {
    margin: 0 auto 40px auto;
    .slick-prev {
      left: -60px;
    }
    .slick-next {
      right: -25px;
    }
    .slick-arrow {
      top: 50%;
    }
  }
  @media ${device.mobile} {
    width: 100%;
    img {
      width: 100%;
      height: 300px;
    }
    .slick-prev::before,
    .slick-next::before {
      font-size: 35px;
    }

    .slick-prev {
      left: 50px;
    }
    .slick-next {
      right: 60px;
    }
    .slick-arrow {
      top: 107%;
    }
  }
`;

export const ProductWatchRight = styled.div`
  width: 44%;
  display: flex;
  flex-direction: column;
  @media ${device.laptopL} {
    margin: 0 auto;
    width: 500px;
    text-align: center;
  }
  @media ${device.mobile} {
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const ProductWatchPrice = styled.span`
  font-size: 28px;
  letter-spacing: 1px;
  background: ${(props: IProductsItem) =>
    props.name && props.name.includes('Black') ? '#fff' : '#000'};
  width: 170px;
  text-align: center;
  padding: 8px;
  color: ${(props: IProductsItem) =>
    props.name && props.name.includes('Black') ? '#000' : '#ebe6e8'};
  border-radius: 25px;
  @media ${device.laptopL} {
    margin: 30px auto 0 auto;
  }
`;

export const ProductWatchDelivery = styled.span`
  color: ${(props: IProductsItem) =>
    props.name && props.name.includes('Black') ? '#fff' : '#000'};
  opacity: 0.6;
  letter-spacing: 1px;
  font-size: 18px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid #9c9eaf;
`;

export const ProductsWatchDescr = styled.p`
  padding-top: 25px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 300;
  color: ${(props: IProductsItem) =>
    props.name && props.name.includes('Black') ? '#fff' : '#000'};
`;

export const ProductWatchBottom = styled.div`
  display: flex;
  align-items: center;
  @media ${device.laptopL} {
    justify-content: center;
  }
`;

export const ProductWatchTypeName = styled.h4`
  margin-top: 20px;
  color: #797a8c;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const ProductWatchSizes = styled.div`
  display: flex;
  align-items: center;
  @media ${device.laptopL} {
    justify-content: center;
  }
`;

export const ProductWatchSize = styled.a`
  margin-right: 7px;
  width: 39px;
  height: 39px;
  border-radius: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: ${(props: IActive & IProductsItem) =>
    props.active
      ? props.name && props.name.includes('Black')
        ? '#fff'
        : '#000'
      : props.name && props.name.includes('Black')
      ? '#474852'
      : '#fff'};
  color: ${(props: IActive & IProductsItem) =>
    props.active
      ? props.name && props.name.includes('Black')
        ? '#000'
        : '#ffffff'
      : props.name && props.name.includes('Black')
      ? '#fff'
      : '#797a8c'};
`;
