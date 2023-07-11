import axios from "axios";
import { IProductsItem } from "@/interfaces/interfaces";

const $host = axios.create({
  baseURL: "https://61117917c38a0900171f1212.mockapi.io/api/",
});

export const productsApi = {
  fetchAllCloths(category: string | null): Promise<Array<IProductsItem>> {
    return $host
      .get(`products${category ? `?category=${category}` : ""}`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => alert(err));
  },
};
