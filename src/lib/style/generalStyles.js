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
export const ButtonStyle = css `
display: block;
text-decoration: none;
width: 100%;
height: 40px;
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
  color: ${colors.white};
  border-color: ${colors.yellow};
  background: ${colors.yellow};
}
&:focus {
    outline: none;
}
`;

export const Button = styled(NavLink) `
    ${ButtonStyle}
`;

export const ButtonSubmit = styled.button `
    ${ButtonStyle}
`;

export const FormStyle = css ` 
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    font-size: 14px;
    outline: none;
    font-family: "Montserrat", sans-serif;
    @media screen and (${breakpoints.desktop}){
        font-size: 16px;
    }
    &:focus {
        border-color: ${colors.yellow};
    }
`;

export const Title = styled.h1 `
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
`;

export const Form = styled.div`
    width: 100%;
    text-align: center;
    margin-left: 450px;
    margin-top: 50px;
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
    text-align: left;
    font-weight: bold;
    margin-bottom: 4px;
    @media screen and (${breakpoints.mobileLarge}) {
        font-size: 14px;
    }
    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputText = styled.input `
    ${FormStyle};
    line-height: 40px;
    padding: 0 10px;
`;

export const TextArea = styled.textarea `
    ${FormStyle};
    line-height: 150%;
    padding: 10px;
    min-width: 100%;
`;

export const InputCheckbox = styled.input `
    margin-right: 12px;
    
    width: 18px;
    height: 18px;
`;

export const InputError = styled.div `
    text-align: left;
    font-size: 14px;
    color: ${colors.red};
    padding-top: 8px;
`;

export const FormColumns = styled.div `
    ${FormStyle};
    column-count: 2;
    column-gap: 40px;
`;
export const Select = styled.select `
    ${FormStyle};
    min-width: 300px;
`;
export const Option = styled.option ` 
    ${FormStyle};
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