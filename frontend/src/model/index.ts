export interface IOrder {
    name: string,
    img: string,
    price: number,
};

export interface IMenuItem {
    name: string,
    img: string,
    id: number,
    price: number,
    toppings?: string[],
    choices?: string[]
};
