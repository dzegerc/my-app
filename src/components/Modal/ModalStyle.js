import styled from "styled-components";
import { 
    colors,
    breakpoints
} from "../../lib/style/theme";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.lightGrey};
      
`;

export const Inner = styled.div`
    border: 2px solid black;
	overflow: hidden;
	display: inline-block;
    flex-direction: column;
   
`;

export const Header = styled.div`
    justify-content: space-between;
    display: flex;
`;

export const Title = styled.h3`
    font-size: 24px;
    color: ${colors.black};
`;

export const CloseButton = styled.button`
    display: inline-block;
    border: none;
    background-color: ${colors.white};
    &:hover{
        cursor: pointer;
    }
`;