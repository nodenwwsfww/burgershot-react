import {useState} from 'react';
import {IMenuItem} from '../model';

export default function useOpenItem() {
    const [openItem, setOpenItem] = useState<IMenuItem | null>(null);
    return {openItem, setOpenItem};
}