import {useState} from 'react';

export default function useOpenItem() {
    const [openItem, setOpenItem] = useState(null);
    return {openItem, setOpenItem};
}