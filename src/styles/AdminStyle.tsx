import styled from 'styled-components';

export const AdminWrapper = styled.div`
  padding-top: 120px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  background: #fff;
  min-height: 800px;
  padding: 30px;
`;

export const AdminType = styled.div`
  margin-top: 30px;
  h4 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 28px;
    color: #000;
    letter-spacing: 1px;
  }
`;

export const AdminForm = styled.div`
  form {
    margin: 20px auto 0 auto;
    width: 400px;
    label {
      display: block;
      font-size: 18px;
      margin-bottom: 8px;
      margin-top: 20px;
    }
    input {
      width: 100%;
      height: 35px;
      padding: 5px 17px;
      border-radius: 20px;
      border: none;
      background-color: #e9e9e9;
      outline: none;
      font-size: 16px;
    }
    button {
      margin-top: 20px;
      width: 100%;
      height: 35px;
      border: none;
      background-color: #000;
      color: #fff;
      border-radius: 20px;
      font-size: 18px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;

export const AdminAvailabelTypes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    font-size: 20px;
    color: #000;
    margin: 10px 10px;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;
