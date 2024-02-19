export interface IHeaderPaths {
    id: number;
    title: string;
    path: string;
}

export interface IProductDTO {
    _id: string;
    image: string;
    title: string;
    description?: string;
    price: number;
    quantity: number;
}