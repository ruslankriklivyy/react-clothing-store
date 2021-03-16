import React from 'react';
import styled from 'styled-components';

const TitleBase = styled.div`
  color: ${(props) => (props.name && props.name.includes('Black') ? '#fff' : '#000')};
  font-size: 32px;
  text-align: center;
  margin-bottom: 80px;
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  ${(props) => props.name && props.name.includes('Black') && 'border-top: 2px solid #fff'};
  font-weight: 500;
  padding-top: 20px;
`;

const Title = ({ children, name }) => {
  return <TitleBase name={name}>{children}</TitleBase>;
};

export default Title;
