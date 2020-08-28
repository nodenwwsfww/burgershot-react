import {useState} from 'react';

export default function useOrders() {
    const [cart, setCart] = useState([]);
    return {cart, setCart};
}