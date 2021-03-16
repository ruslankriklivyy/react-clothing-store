import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const productsApi = {
  getProducts(type) {
    return instance.get(`/products?category=${type}`).then(({ data }) => {
      return data;
    });
  },
};
