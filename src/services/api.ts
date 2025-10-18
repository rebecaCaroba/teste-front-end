import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
});

export interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export interface ProductsResponse {
    success: boolean;
    products: Product[];
}

export const getProducts = async (): Promise<ProductsResponse> => {
    const response = await api.get<ProductsResponse>('/products');
    return response.data;
};

export default api;

