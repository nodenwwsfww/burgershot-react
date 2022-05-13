import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
`;

const ButtonCount = styled.button`
    width: 25px;
    background-color: transparent;
`;
interface CountItemProps {
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}
const CountItem: FC<CountItemProps> = ({count, setCount, onChange}) => {

    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount disabled ={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type="number" min="1" max="100" value={count ? count: 1} onChange={onChange}/>
                <ButtonCount disabled={count > 100} onClick={() => setCount(count + 1)}>+</ButtonCount>    
            </div>
        </CountWrapper>
    );
}

export default CountItem;