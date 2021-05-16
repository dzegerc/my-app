import React from 'react';
import { 
    Wrapper,
    Inner,
    Header,
    Title,
   CloseButton
} from './ModalStyle';
import { VscChromeClose } from "react-icons/vsc";

const Modal = (props) => {

    return (
        <Wrapper>
            <Inner>
                <Header>
                    <Title>Add Event</Title>
                    <CloseButton onClick={props.modalClose}>
                        <VscChromeClose size={25}/>
                    </CloseButton>
                </Header>
                {props.children}
            </Inner>
        </Wrapper>
    );
}

export default Modal;