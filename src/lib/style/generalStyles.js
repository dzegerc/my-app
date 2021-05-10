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

export const Title = styled.h2 `
    text-align: center;
    margin-bottom: 30px;
`;

export const Form = styled.div`
    width: 100%;
    text-align: center;

    @media screen and (${breakpoints.desktop}) {
        width: 400px
    }

    @media screen and (${breakpoints.desktopLarge}) {
        width: 400px
    }
`;

export const FormRow = styled.div `
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const CheckboxWrapper = styled.div `
    display: flex;
    align-items: center;
`;

export const InputLabel = styled.label `
    display: block;
    font-weight: 600px;
    margin-bottom: 4px;

    @media screen and (${breakpoints.mobileLarge}) {
        font-size: 14px;
    }
    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputText = styled.input `
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 40px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;

    &:focus {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const TextArea = styled.textarea `
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 150%;
    padding: 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    min-width: 100%;

    &:focus {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputCheckbox = styled.input `
    margin-right: 12px;
    width: 18px;
    height: 18px;
`;

export const InputError = styled.p `
    font-size: 14px;
    color: ${colors.red};
    padding-top: 8px;
`;

export const SuccessMessage = styled.p`
    margin: 0 auto;
    padding: 15px;
    margin-bottom: 32px;
    border-radius: 6px;
    background: ${colors.successBackground};
    color: ${colors.success};
    ${props => props.isError && `
        background: ${colors.errorBackground};
        color: ${colors.error};
    `};
    @media screen and (${breakpoints.mobileLarge}){
        max-width: 400px;
    }
`;


     
