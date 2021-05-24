import React from 'react';
import { 
    Wrapper,
    Inner,
    Header,
    Title,
   CloseButton
} from './ModalStyle';

const Modal = (props) => {

    return (
        <Wrapper>
            <Inner>
                <Header>
                    <Title>Add Event</Title>
                    <CloseButton onClick={props.modalClose}>
                    </CloseButton>
                </Header>
                {props.children}
            </Inner>
        </Wrapper>
    );
}

export default Modal;