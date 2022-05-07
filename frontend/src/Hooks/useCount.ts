import { useState } from "react";

export default function useCount() {
    const [count, setCount] = useState(1);

    const onChange = event => setCount(event.target.value);
    return { count, setCount, onChange}
}