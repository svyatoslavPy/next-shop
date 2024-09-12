import { BASE_API, DEFAULT_LIMIT_PRODUCTS } from '@/shared/constants/api';
import { IProducts } from '@/shared/interfaces/products.interface';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

const responseBody = <TResponse>(response: AxiosResponse<TResponse>) =>
  response.data;

const requests = {
  get: <TResponse>(url: string): Promise<TResponse> =>
    instance.get(url).then(responseBody),
  post: <TResponse>(url: string, body: TResponse): Promise<TResponse> =>
    instance.post(url, body).then(responseBody),
  put: <TResponse>(url: string, body: TResponse): Promise<TResponse> =>
    instance.put(url, body).then(responseBody),
  delete: <TResponse>(url: string): Promise<TResponse> =>
    instance.delete(url).then(responseBody),
  patch: <TResponse>(url: string, body: TResponse): Promise<TResponse> =>
    instance.patch(url, body).then(responseBody),
};

export const client = {
  getProducts: (limit: number = DEFAULT_LIMIT_PRODUCTS): Promise<IProducts> =>
    requests.get(`products?limit=${limit}&offset=0`),
};
