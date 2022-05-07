import React from "react";

export default function useCount() {
    const [count, setCount] = React.useState(1);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setCount(+event.target.value);
    return { count, setCount, onChange}
}