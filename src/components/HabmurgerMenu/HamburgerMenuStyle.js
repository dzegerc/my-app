import styled from 'styled-components';

export const HamburgerStyle = styled.button `
    width: 25px;
    margin-bottom: 6px;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: space-around;
    padding: 0;

    @media screen and (${breakpoints.desktop}) {
        display: none;
    }
`;

export const NavHamburgerLine = styled.div`    
    width: 100%;
    height: 2px;
    border-radius: 100px;
    background-color: ${colors.darkGrey};
    margin-bottom: 6px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;