import styled from "styled-components";
import { 
    colors,
    breakpoints,
    boxShadow,
    transitionCubic
} from "../../lib/style/theme";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    overflow: auto
    background-color: ${colors.white};
      
`;

export const Inner = styled.div`
    position: relative;
    border: 1px solid black;
    width: 600px;
    height: 700px;
    border-radius: 8px;
	overflow: hidden;
	display: inline-block;
    flex-direction: column;
    background-color: ${colors.lightGrey};
    box-shadow: ${boxShadow};
    transition: ${transitionCubic};

   
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