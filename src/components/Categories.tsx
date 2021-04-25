import React from 'react';
import { Link } from 'react-router-dom';

import { CategoriesWrapper } from '../styles/CategoriesStyle';

export interface ICategories {
  show?: boolean;
  items: Array<string>;
  category: string | null;
  links: Array<string>;
  categoryName: string;
  onSelectCategory: (type: string, name: string) => void;
  setVisibleBurgerMenu?: (visible: boolean) => void;
  onSelectCloth?: (id: number) => void;
}

const Categories: React.FC<ICategories> = React.memo(function Categories({
  items,
  links,
  onSelectCategory,
  setVisibleBurgerMenu,
  show,
  onSelectCloth,
}) {
  const onSelect = (id: number) => {
    if (onSelectCloth) {
      onSelectCloth(id);
    }
  };

  const selectCategory = (name: string, id: number, indexItem: number) => {
    const type = links.filter((name, index) => index === indexItem);

    onSelect(id);
    onSelectCategory(type.join(''), name);

    if (show && setVisibleBurgerMenu) {
      setVisibleBurgerMenu(false);
    }
  };

  const generateLink = React.useCallback(
    (indexItem: number) => {
      const newLinks = links.filter((name, index) => index === indexItem);
      return newLinks.join('').toLowerCase();
    },
    [links],
  );

  return (
    <CategoriesWrapper show={show}>
      <ul>
        {items?.map((item: string, index: number) => (
          <li key={`${item}-${index}`}>
            <Link
              to={`/category/${generateLink(index)}`}
              onClick={() => selectCategory(item, index, index)}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </CategoriesWrapper>
  );
});

export default Categories;
