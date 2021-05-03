import styled from 'styled-components';
import {
    breakpoints
} from '../../lib/style/theme';

export const EventInfo = styled.div `

    @media screen and ${breakpoints.mobileLarge} {
        padding: 0 25px 65px;

        &-Figure {
            width: 230px;
            height: 300px;
        }

    @media screen and ${breakpoints.tablet} {
        padding: 0 25px 65px;

        &-Info {
            display: flex;
            justify-content: space-between;
        }
        &-Figure {
           height: 300px;
           width: 400px;
        }
        &-Item {
            &:last-child {
                text-align: right;
            }
        }
        &-Content {
            margin-bottom: 0;
            padding: 0 25px;
        }
        &-ContentRow {
            display: flex;
            margin-bottom: 32px;
        }
        &-ItemTitle {
            font-size: 14px;
            margin-bottom: 12px;
        }
        &-ItemValue {
            font-size: 14px;
        }
        &-Description {
            font-size: 14px;
            line-height: 150%;
        }

        @media screen and ${breakpoints.desktop} {
            max-width: 930px;
            margin: 0 auto;
            padding: 0 0 64px;
            
            &-Figure {
                height: 600px;
                width: 350px;
            }
            &-Content {
                width: 300px;
              }
            &-ContentRow {
                margin-bottom: 32px;
              }
          
            &-ItemTitle {
                font-size: 16px;
              }
          
            &-ItemValue {
                font-size: 16px;
              }
          
            &-Description {
                width: 800px;
                font-size: 16px;
              }

        @media screen and ${breakpoints.desktopLarge} {
            max-width: 1280px;

            &-Figure {
                height: 450px;
                width: 800px;
              }
          
            &-Content {
                width: 400px;
              }
          
            &-Description {
                width: 900px;
              }
    }
`;

