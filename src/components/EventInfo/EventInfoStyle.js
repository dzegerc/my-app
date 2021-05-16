import styled from 'styled-components';
import {
    transitionCubic,
    boxShadow,
    colors
} from '../../lib/style/theme';

export const EventInfoStyle = styled.div `
    max-width: 1280px;
    width: 50%;
    padding: 10px;
    `;

export const Title = styled.h2 `
    text-align: center;
    margin-bottom: 30px;
`;

export const Image = styled.img ` 
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Content = styled.div `
    width: 100%;
    margin-bottom: 15px;
    
`;

export const ContentRow = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const Item = styled.div `
    &:last-child {
        text-align: right;
    }
`;

export const ItemTitle = styled.h3 `
    font-size: 14px;
    margin-bottom: 4px;
`;

export const ItemValue = styled.p `
    font-size: 14px;
`;

export const Description = styled.div `
    width: 50%;
    font-size: 14px;
    line-height: 150%;
`;
