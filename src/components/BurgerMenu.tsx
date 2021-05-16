import React from 'react';

import { Categories } from '.';
import cancelSvg from '../assets/img/cancel.svg';
import { BurgerMenuClose, BurgerMenuWrapper } from '../styles/BurgerMenuStyle';

export interface IBurgerMenu {
  show: boolean;
  setVisibleBurgerMenu: (visible: boolean) => void;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({ show, setVisibleBurgerMenu }) => {
  return (
    <BurgerMenuWrapper show={show}>
      <BurgerMenuClose onClick={() => setVisibleBurgerMenu(false)}>
        скрыть
        <img src={cancelSvg} alt="cancel svg" />
      </BurgerMenuClose>
      <Categories show={show} setVisibleBurgerMenu={setVisibleBurgerMenu} />
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
