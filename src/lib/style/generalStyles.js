import styled from 'styled-components';
import {
    colors,
    breakpoints,
    transitionEase
} from '../../lib/style/theme';
export const Grid = styled.div `
    display: grid;
    row-gap: 32px;
    @media screen and (${breakpoints.mobileLarge}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }
    @media screen and (${breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        ${props => props.columns === 3 && 
            'padding: 0 32px'
        }
    }
    @media screen and (${breakpoints.desktopLarge}) {
        ${props => props.columns === 3 && 
            'padding: 0 84px;'
        }
    }
`;
    export const Button = styled.button `
    display: block;
    width: 100%;
    line-height: 40px;
    text-align: center;
    transition: ${transitionEase};
    border: 1px solid ${colors.red};
    border-radius: 6px;
    background: ${colors.red};
    color: ${colors.white};

    &:hover {
        cursor: pointer;
        background: ${colors.yellow};
        border-color: ${colors.yellow};
    }

    &:focus {
        outline: none;
    }
`;

