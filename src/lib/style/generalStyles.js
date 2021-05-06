import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
        ${props => props.columns === 4 && 
            'padding: 0 84px;'
        }
    }
`;
export const Button = styled(NavLink) `
display: block;
text-decoration: none;
width: 100%;
height: 30px;
line-height: 40px;
text-align: center;
border: 1px solid ${colors.red};
border-radius: 6px;
background: ${colors.red};
color: ${colors.white};
transition: ${transitionEase};
font-size: 16px;
font-family: "Montserrat", sans-serif;

&:hover {
  cursor: pointer;
  border-color: ${colors.yellow};
  background: ${colors.yellow};
}

&:focus {
    outline: none;
}
`;


     
