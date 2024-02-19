import { IProductDTO } from './../../../components/types';

export interface IProductsState {
    products: null | IProductDTO[];
    status: string;
    error: null | string;
}