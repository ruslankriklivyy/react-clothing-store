import React from 'react';
import styled from 'styled-components';

const TitleBase = styled.div`
  color: ${(props: ITitle) => (props.name && props.name.includes('Black') ? '#fff' : '#000')};
  font-size: 32px;
  text-align: center;
  margin-bottom: 80px;
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  padding-top: 20px;
`;

interface ITitle {
  children?: (string | Element)[] | React.ReactNode;
  name?: string;
}

const Title: React.FC<ITitle> = ({ children, name }) => {
  return <TitleBase name={name}>{children}</TitleBase>;
};

export default Title;
