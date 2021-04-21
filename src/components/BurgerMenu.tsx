import React from 'react';

import { Categories } from '.';
import cancelSvg from '../assets/img/cancel.svg';
import { BurgerMenuClose, BurgerMenuWrapper } from '../styles/BurgerMenuStyle';

export interface IBurgerMenu {
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
