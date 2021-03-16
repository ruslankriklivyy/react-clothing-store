import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        font-size: 19px;
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
          transition: all 0.4s ease;
        }
        &:hover::after {
          width: 100%;
        }
        &.active::after {
          width: 100%;
        }
      }
    }
  }
`;

const Categories = ({ items, links, onSelectCategory, categoryName }) => {
  const selectCategory = (name, indexItem) => {
    const type = links.filter((name, index) => index === indexItem);
    onSelectCategory(type.join('').toLowerCase(), name);
  };

  const generateLink = (indexItem) => {
    const newLinks = links.filter((name, index) => index === indexItem);
    return newLinks.join('').toLowerCase();
  };

  return (
    <CategoriesWrapper>
      <ul>
        {items.map((name, index) => (
          <li>
            <Link
              to={`/category/${generateLink(index)}`}
              onClick={() => selectCategory(name, index)}
              key={`${name}-${index}`}
              className={name === categoryName && 'active'}
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
