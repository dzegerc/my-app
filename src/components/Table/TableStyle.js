import styled, { css } from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

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

export const ButtonAdd = styled.button`
    ${ButtonStyle}
`;
export const EventEmpty = styled.p `
text-align: center;
`
export const Wrapper = styled.div `
    width: 100%;
    font-weight: 550;
    text-align: center;
    margin-top: 30px;
    line-height: 50px;
    border-spacing: 0;
    border-radius:6px;
    overflow: hidden;

@media screen and (${breakpoints.mobileLarge}) {
    &:child {
        display: table-cell;
    }
}
@media screen and (${breakpoints.tablet}) { 
    &:child {
        display: table-cell;
    }
}
`;
export const TableHead = styled.tr `
    &:hover{
        background-color: ${colors.hoverLightGray}
}
`;
export const TableBody = styled.tbody ` 
    margin-top: auto;
    margin-bottom: auto;
    `;

export const MdDelete = styled.button ` 
    border: none;
    background-color: inherit;
    &:hover{
        cursor: pointer;
    }
`;