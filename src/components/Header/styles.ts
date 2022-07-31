import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 70px;
    background: ${props => props.theme.headerPrimary};
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
    background: ${({theme}) => theme.headerSecundary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;

    #menu{
        display: flex;
        flex-direction: row;
        height: 90%;
    }
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

export const SearchBox = styled.div`
    width: 300px;
    height: 45px;
    background: ${({theme}) => theme.bgSecundary};
    margin-right: 20px;
    border-radius: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;

    #icon {
        position: absolute;
        z-index: 10;
        left: 20px;
        color: ${({theme}) => theme.textSecundary};
    }

    #clear {
        position: absolute;
        z-index: 10;
        right: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        font-weight: bold;
        color: ${({theme}) => theme.textSecundary};
    }

    input {
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        outline: none;
        text-align: center;
        font-size: 13px;
        color: ${({theme}) => theme.textSecundary};
    }
`;

export const Container = styled.div`
    height: 143px;
    background: ${({theme}) => theme.bg};
`;