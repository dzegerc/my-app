import styled, { css } from "styled-components";
import { colors } from "../../lib/style/theme";

export const ButtonStyle = css `
    display: block;
    width: 200px;
    height: 50px;
    text-align: center;
    border: 2px solid ${colors.black};
    border-radius: 10px;
    color: ${colors.black};
    background-color: ${colors.white};
    font-family: "Montserrat", sans-serif;
    font-size: 16px;

    &:hover {
        cursor: pointer;
        color: ${colors.green};
        border-color: ${colors.green};
    }
    &:focus {
        outline: none;
    }
`;

export const ButtonAdd = styled.button `
    ${ButtonStyle}
`;
export const TableOptions = styled.div ` 

`;
export const TableWrapper = styled.div `
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 16px;
`;
export const TableHead = styled.head `
    display: grid;
`;
export const TableBody = styled.body ` 
    display: grid;
`;
export const Th = styled.th ` 
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
`;
export const Tr = styled.tr `
    background-color: ${colors.white};
`;
export const Td = styled.td `
    text-align: center;
`;

export const VscTrash = styled.div `
    position: absolute;
`;
export const TableEmpty = styled.p `
    text-align: center;
    font-size: 16px;
`;
export const MdDelete = styled.button ` 
    position: absolute;
`;