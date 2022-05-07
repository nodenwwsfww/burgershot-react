import {ChangeEvent, useState} from "react";

export default function useCount() {
    const [count, setCount] = useState(1);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setCount(+event.target.value);
    return { count, setCount, onChange}
}