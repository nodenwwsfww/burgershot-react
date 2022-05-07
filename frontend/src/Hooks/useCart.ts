import { useState } from 'react';
import { IOrder } from '../Interfaces';

export default function useOrders() {
    const [cart, setCart] = useState<IOrder>([]);
    return {cart, setCart};
}
