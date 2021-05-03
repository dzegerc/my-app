import styled from 'styled-components';
import {
    transitionCubic,
    boxShadow,
    colors
} from '../../lib/style/theme';

export const EventsInfo = styled.div `
    max-width: 1300;
    border: 1px solid ${colors.lightGrey};
    transition: ${transitionCubic};
    border-radius: 6px;
    padding: 10px;

    &:hover {
        box-shadow: ${boxShadow};
    }
`;

export const Title = styled.h2 `
    font-size: 18px;
    padding: 10px 0 20px;
    border-bottom: 1px solid ${colors.lightGrey};
    text-align: center;
    margin-bottom: 15px;
`;

export const Content = styled.div ` 
    margin-bottom: 15px;
`;

export const ContentRow = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    &:last-child {
        text-align: left;
    }
`;

export const Item = styled.div ` 
    &:last-child {
        text-align: right;
    }
`;

export const ItemTitle = styled.h3 `
    font-size: 12px;
    margin-bottom: 4px;
`;

export const ItemValue = styled.p `
    font-size: 12px;
`;
