import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.bg};
    width: calc(100% - 40px);
    padding: 20px;
    height: 100%;
    margin-bottom: 50px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.bg};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.secundary};
        border-radius: 10px;
        border: 3px solid ${({theme}) => theme.bg};
    }
`;

type PProps = {
    bold?: boolean;
}

export const PSection = styled.p<PProps>`
    font-size: 20px;
    color: ${({theme}) => theme.textPrimary};
    font-weight: ${({bold}) => bold ? "bold" : "normal"};
`;