import styled from 'styled-components';
import {
   breakpoints
} from '../../lib/style/theme';

export const Grid = styled.div `
        display: grid;
        row-gap: 32px;

    @media screen and ${breakpoints.mobileLarge} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media screen and ${breakpoints.desktop} {
        grid-template-columns: repeat(3, 1fr);

        &_3 {
          padding: 0 32px;
        }
    }

    @media screen and ${breakpoints.desktopLarge} {
        grid-template-columns: (3, 1fr);

        &_4 {
         padding: 0 84px;
    }
}
`;