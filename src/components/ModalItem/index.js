import React from 'react';
import styled from 'styled-components';
import ButtonCheckout from '../Style/ButtonCheckout';

const OverLay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
 
`;

const Modal = styled.div`
    background-color: #ffffff;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    flex-basis: auto;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: calc(100% - 200px);
    padding: 30px;


`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Pacifico;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 53px;
`;

const ModalItem = ({openItem, setOpenItem, cart, setCart}) => {

    function closeModal (e) {
        if (!e || e.target.id === 'modalitem-overlay') {
            setOpenItem(null);
        }
    }

    const order = {...openItem};
    function addToCart(e) {
        setCart([...cart, order]);
        closeModal();
    }

    return (
        <OverLay 
            id="modalitem-overlay" 
            onClick={closeModal}>

            <Modal>
                <Banner img={openItem.img}/>

                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'rub'})}</div>
                    </HeaderContent>
                    <ButtonCheckout onClick={addToCart}>Добавить</ButtonCheckout>
                </Content>

            </Modal>
        </OverLay>
    );
}

export default ModalItem;