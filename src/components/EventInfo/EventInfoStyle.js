import styled from 'styled-components';
import {
    transitionCubic,
    boxShadow,
    colors
} from '../../lib/style/theme';

export const EventInfoStyle = styled.div `
    border-radius: 6px;
    max-width: 1280px;
    box-shadow: ${boxShadow};
    transition: ${transitionCubic};
    padding: 10px;
    margin: 0 auto; border: 1px solid ${colors.lightGrey};
`;

export const Title = styled.h2 `
    text-align: center;
    margin-bottom: 30px;
`;

export const Figure = styled.figure `
    width: 100%;
    height: 230px;
    margin-bottom: 24px;
`;

export const Image = styled.img ` 
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Content = styled.div `
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
    font-size: 14px;
    line-height: 150%;
`;
