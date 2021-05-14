import styled from 'styled-components';
import {
    colors
} from '../../lib/style/theme';




const Modal = styled.div`
	z-index: auto;
	display: ${({show}) => (show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	background: ${colors.lightGrey});
`;