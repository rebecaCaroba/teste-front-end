import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia',
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
    const response = await api.get<ProductsResponse>('/lista-produtos/produtos.json');
    return response.data;
};

export default api;

