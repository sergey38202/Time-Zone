export interface Product {
    id: string;
    title: string;
    count: number;
    price: number;
    image: string;
}

export interface ICartState {
    items: Product[];
}