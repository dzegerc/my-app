import styled from "styled-components";
import { 
    colors,
    breakpoints
} from "../../lib/style/theme";

export const Wrapper = styled.div`
    position: absolute;
    margin-left: 300px;
    width: 700px;
    background-color: ${colors.white};
      
`;

export const Inner = styled.div`
    border: 4px solid black;
	overflow: hidden;
	display: inline-block;
    flex-direction: column;
   
`;

export const Header = styled.div`
    margin-right: 20px;
    justify-content: space-between;
    display: flex;
`;

export const Title = styled.h3`
    margin-left: 30px;
    margin-top: 30px;
    font-size: 25px;
    color: ${colors.red};
`;

export const CloseButton = styled.button`
    display: inline-block;
    border: none;
    background-color: ${colors.white};
    &:hover{
        cursor: pointer;
    }
`;