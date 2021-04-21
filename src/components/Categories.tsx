import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  getAllCloths,
  getCategories,
  setCategory,
  setCategoryName,
} from '../redux/actions/products';
import { RootState } from '../redux/reducers';
import { Categories as CategoriesType } from '../types/types';

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

const Categories: React.FC<ICategories> = ({
  items,
  category,
  links,
  onSelectCategory,
  categoryName,
  setVisibleBurgerMenu,
  show,
  onSelectCloth,
}) => {
  const dispatch = useDispatch();

  const onSelect = (id: number) => {
    if (onSelectCloth) {
      onSelectCloth(id);
    }
  };

  const selectCategory = (name: string, id: number, indexItem: number) => {
    onSelect(id);
    const type = links.filter((name, index) => index === indexItem);
    onSelectCategory(type.join(''), name);
    dispatch(setCategoryName(name));
    if (show && setVisibleBurgerMenu) {
      setVisibleBurgerMenu(false);
    }
  };

  const generateLink = (indexItem: number) => {
    const newLinks = links.filter((name, index) => index === indexItem);
    return newLinks.join('').toLowerCase();
  };

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  React.useEffect(() => {
    const categoryRef = localStorage.getItem('category');

    if (categoryRef) {
      dispatch(setCategory(JSON.parse(categoryRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('category', JSON.stringify(category));
  }, [category]);

  return (
    <CategoriesWrapper show={show}>
      <ul>
        {items?.map((item: string, index: number) => (
          <li key={`${item}-${index}`}>
            <Link
              to={`/category/${generateLink(index)}`}
              onClick={() => selectCategory(item, index, index)}
              href="/">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </CategoriesWrapper>
  );
};

export default Categories;
