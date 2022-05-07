import { useState } from 'react';
import { IOrder } from '../model';

export default function useOrders() {
    const [cart, setCart] = useState<IOrder[]>([]);
    return {cart, setCart};
}
