import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategory, setCategoryId, setCategoryName } from '../redux/actions/products';
import { RootState } from '../redux/reducers';

import { CategoriesWrapper } from '../styles/CategoriesStyle';

export interface ICategories {
  show?: boolean;
  setVisibleBurgerMenu?: (visible: boolean) => void;
}

const Categories: React.FC<ICategories> = React.memo(function Categories({
  setVisibleBurgerMenu,
  show,
}) {
  const dispatch = useDispatch();
  const { categoriesNames, categoriesNamesEng } = useSelector((state: RootState) => state.products);

  const onSelect = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const selectCategory = (name: string, id: number, indexItem: number) => {
    const type = categoriesNamesEng.filter((name, index) => index === indexItem);

    onSelect(id);
    dispatch(setCategory(type.join('')));
    dispatch(setCategoryName(name));

    if (show && setVisibleBurgerMenu) {
      setVisibleBurgerMenu(false);
    }
  };

  const generateLink = React.useCallback(
    (indexItem: number) => {
      const newLinks = categoriesNamesEng.filter((name, index) => index === indexItem);
      return newLinks.join('').toLowerCase();
    },
    [categoriesNamesEng],
  );

  return (
    <CategoriesWrapper show={show}>
      <ul>
        {categoriesNames?.map((item: string, index: number) => (
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
