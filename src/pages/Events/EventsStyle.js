import styled from 'styled-components';
import {
   breakpoints
} from '../../lib/style/theme';

export const Section = styled.section `
        display: grid;
        row-gap: 32px;

    @media screen and ${breakpoints.mobileLarge} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media screen and ${breakpoints.desktop} {
        grid-template-columns: repeat(3, 1fr);
          padding: 0 32px;
        }
    }

    @media screen and ${breakpoints.desktopLarge} {
        grid-template-columns: (4, 1fr);
         padding: 0 84px;
    }
}
`;