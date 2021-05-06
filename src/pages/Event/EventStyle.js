import styled from 'styled-components';
import { Figure } from '../../components/EventInfo/EventInfoStyle';
import {
    breakpoints
} from '../../lib/style/theme';

export const EventInfo = styled.div `

    @media screen and ${breakpoints.mobileLarge} {
        padding: 0 25px 65px;
        }

    @media screen and ${breakpoints.tablet} {
        padding: 0 25px 65px;
    }
`;

export const Figure = styled.figure ` 

    @media screen and ${breakpoints.mobileLarge} {
        padding: 0 25px 65px;

        width: 230px;
        height: 300px;
    }

    @media screen and ${breakpoints.tablet} {
    padding: 0 25px 65px;

        height: 300px;
        width: 400px;
    }

    @media screen and ${breakpoints.desktop} {
        max-width: 930px;
        margin: 0 auto;
        padding: 0 0 64px;

        height: 600px;
        width: 350px;
    }
    @media screen and ${breakpoints.desktopLarge} {
        max-width: 1280px;
        
        height: 450px;
        width: 800px;
    }
`;

export const Content = styled.div `

    @media screen and ${breakpoints.tablet} {
      padding: 0 25px 65px;

      margin-bottom: 0;
      padding: 0 25px;
    }

    @media screen and ${breakpoints.desktop} {
        max-width: 930px;
        margin: 0 auto;
        padding: 0 0 64px;

        width: 300px;
    }

    @media screen and ${breakpoints.desktopLarge} {
        max-width: 1280px;

        width: 400px;
    } 
`;

export const ContentRow = styled.div `

    @media screen and ${breakpoints.tablet} {
        padding: 0 25px 65px;

        display: flex;
        margin-bottom: 32px;
    }

    @media screen and ${breakpoints.desktop} {
        max-width: 930px;
        margin: 0 auto;
        padding: 0 0 64px;

        margin-bottom: 32px;
    }
`;

export const Description = styled.div `

    @media screen and ${breakpoints.tablet} {
        padding: 0 25px 65px;

        font-size: 14px;
        line-height: 150%;
    }

    @media screen and ${breakpoints.desktop} {
        max-width: 930px;
        margin: 0 auto;
        padding: 0 0 64px;

        width: 800px;
        font-size: 16px;
    }

    @media screen and ${breakpoints.desktopLarge} {
        max-width: 1280px;

        width: 900px;
    }
`;