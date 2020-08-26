import React from 'react';
import styled from 'styled-components';


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

const Button = styled.button`
    background: #299B01;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    padding: 20px 80px;
    border: none;
    margin: auto;
    margin-bottom: 40px;
    max-width: 250px;
`; 

const ModalTitle = styled.h3`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    
    font-family: Pacifico;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 53px;
`;
const ModalItem = ({openItem, setOpenItem}) => {
    if (!openItem) return null;

    function closeModal ({target}) {
        if (target.id === 'modalitem-overlay') {
            setOpenItem(null);
        }
    }

    return (
        <OverLay 
            id="modalitem-overlay" 
            onClick={closeModal}>

            <Modal>
                <Banner img={openItem.img}/>

                <ModalTitle>
                    <span>{openItem.name}</span>
                    <span>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'rub'})}</span>
                </ModalTitle>

                <Button>Добавить</Button>
            </Modal>
        </OverLay>
    );
}

export default ModalItem;