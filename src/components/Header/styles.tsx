import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 70px;
    background: ${props => props.theme.bgPrimary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1#Logo {
        font-weight: bold;
        color: white;
        font-size: 20px;
        margin-left: 20px;
        cursor: pointer;
    }
`;

export const MenuContainer = styled.div`
    width: calc(100% - 10px);
    height: 70px;
    background: ${({theme}) => theme.bgSecundary};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
`;

type MenuProps = {
    active: boolean;
}

export const MenuItem = styled.div<MenuProps>`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    margin-right: 20px;
    justify-content: center;
    color: ${(props) => props.active ? props.theme.destacado : props.theme.textSecundary };
    cursor: pointer;
    font-weight: ${({active}) => active ? "bold" : "normal"};
    border-bottom: ${({active, theme}) => active ? `3px solid ${theme.destacado}` : "none"};

    &:hover {
        border-bottom: ${({active, theme}) => active ? `3px solid ${theme.destacado}` : `3px solid ${theme.textSecundary}`};
    }

    p{
        margin-left: 10px;
        &::selection{
            background: transparent;
        }
    }
    
`;

export const Container = styled.div`
    height: 143px;
`;