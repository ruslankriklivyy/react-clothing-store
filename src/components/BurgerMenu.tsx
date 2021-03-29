import React from 'react';
import styled from 'styled-components';
import { Categories } from '.';
import cancelSvg from '../assets/img/cancel.svg';
import { device } from '../utils/deviceMedia';

const BurgerMenuWrapper = styled.div`
  display: block;
  width: 330px;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  right: ${(props: IBurgerMenu) => (props.show ? '0' : '-400px')};
  z-index: 900;
  visibility: ${(props: IBurgerMenu) => (props.show ? 'visbility' : 'hidden')};
  background: #fff;
  transition: all 0.7s ease;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const BurgerMenuClose = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  top: 15px;
  right: 15px;
  font-size: 18px;
  opacity: 0.3;
  letter-spacing: 1px;
  cursor: pointer;
  img {
    margin-left: 10px;
    width: 21px;
    height: 21px;
  }
`;

interface IBurgerMenu {
  show: boolean;
  items: Array<string>;
  category: string | null;
  links: Array<string>;
  categoryName: string;
  onSelectCategory: (type: string, name: string) => void;
  setVisibleBurgerMenu: (visible: boolean) => void;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({
  onSelectCategory,
  categoryName,
  items,
  category,
  links,
  show,
  setVisibleBurgerMenu,
}) => {
  return (
    <BurgerMenuWrapper show={show}>
      <BurgerMenuClose onClick={() => setVisibleBurgerMenu(false)}>
        скрыть
        <img src={cancelSvg} alt="cancel svg" />
      </BurgerMenuClose>
      <Categories
        show={show}
        onSelectCategory={onSelectCategory}
        setVisibleBurgerMenu={setVisibleBurgerMenu}
        categoryName={categoryName}
        items={items}
        category={category}
        links={links}
      />
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
