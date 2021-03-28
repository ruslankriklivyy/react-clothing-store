import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setCategory, setCategoryName } from '../redux/actions/products';

const CategoriesWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 8px;
    border-radius: 18px;
    li {
      margin: 0 10px;
      a {
        position: relative;
        font-size: 17px;
        font-weight: 400;
        text-transform: uppercase;
        color: #fff;
        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          right: 0;
          left: 0;
          margin: 0 auto;
          background: #fff;
          width: 0;
          height: 1px;
          opacity: 0;
          transition: all 0.4s ease;
        }
        &:hover::after {
          width: 100%;
          opacity: 1;
        }
        &.active::after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
`;

interface ICategories {
  items: Array<string>;
  category: string | null;
  links: Array<string>;
  onSelectCategory: (type: string, name: string) => void;
  categoryName: string;
}

const Categories: React.FC<ICategories> = ({
  items,
  category,
  links,
  onSelectCategory,
  categoryName,
}) => {
  const dispatch = useDispatch();

  const selectCategory = (name: string, indexItem: number) => {
    const type = links.filter((name, index) => index === indexItem);
    onSelectCategory(type.join('').toLowerCase(), name);
  };

  const generateLink = (indexItem: number) => {
    const newLinks = links.filter((name, index) => index === indexItem);
    return newLinks.join('').toLowerCase();
  };

  React.useEffect(() => {
    const categoryNameRef = localStorage.getItem('categoryName');
    if (categoryNameRef) {
      dispatch(setCategoryName(JSON.parse(categoryNameRef)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem('categoryName', JSON.stringify(categoryName));
  }, [categoryName]);

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
    <CategoriesWrapper>
      <ul>
        {items.map((name, index) => (
          <li key={`${name}-${index}`}>
            <Link
              to={`/category/${generateLink(index)}`}
              onClick={() => selectCategory(name, index)}
              href="/">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </CategoriesWrapper>
  );
};

export default Categories;
