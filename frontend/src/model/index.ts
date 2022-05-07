export interface IOrder {
    name: string,
    img: string,
    price: number, // Cost of 1 item
    count: number,
    totalPrice: number, // Total cost = count * price
};

export interface IMenuItem {
    name: string,
    img: string,
    id: number,
    price: number,
    toppings?: string[],
    choices?: string[]
};
