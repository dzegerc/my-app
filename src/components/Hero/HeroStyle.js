import styled from 'styled-components';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';

export const SectionHero = styled.section `
    background-image: url(../../assets/images/hero.jpeg);
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    @media screen and (${breakpoints.mobileLarge}) {
        &-HeroContent {
            padding: 0 25px;
        }
        &-HeroOverlay {
            justify-content: flex-start;
        }
        &-HeroHeading {
            font-size: 24px;
            max-width: 400px;
        }
        &-HeroSubheading {
            max-width: 550px;
        }
    }

    @media screen and (${breakpoints.desktop}) {
        &-HeroContent {
            padding: 0;
            max-width: 993px;
            margin: 0 auto;
        }
        &-HeroHeading {
            font-size: 28px;
            max-width: 500px;
        }
        &-HeroSubheading {
            max-width: 700px
        }
    }

    @media screen and (${breakpoints.desktopLarge}) {
        height: 500px;
        &-HeroContent {
            max-width: 1280px;
        }
        &-HeroHeading {
            font-size: 32px;
        }
        &-HeroSubheading {
            font-size: 16px;
            max-width: 800px;
        }
    }
`;

export const HeroOverlay = styled.div `
    position: relative;
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroContent = styled.div `
    width: 100%;
    padding: 0 15px;
`;

export const HeroHeading = styled.h1 `
    color: ${colors.yellow};
    max-width: 450px;
    line-height: 140%;
    margin-left: 200px;
    margin-bottom: 30px;
    font-size: 30px;
`;

export const HeroSubheading = styled.p `
    max-width: 750px;
    line-height: 200%;
    font-weight: 500;
    margin-left: 200px;
    color: ${colors.white};
    font-size: 14px;
`;

