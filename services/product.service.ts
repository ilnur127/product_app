import { IProduct } from '@/interfaces/product.interface';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';

axios.defaults.baseURL = API_URL;

export const ProductService = {
  async getAll() {
    const { data } = await axios.get<IProduct[]>('/api/products');

    return data;
  },

  async getProductById(id: string) {
    const { data } = await axios.get<IProduct>(`/api/products/${id}`);

    return data;
  },
};
