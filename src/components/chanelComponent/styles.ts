import styled from "styled-components";

export const ButtonChanel = styled.div`
    width: 170px;
    min-width: 170px;
    height: 170px;
    border-radius: 10px;
    margin-top: 10px;
    border-left: 3px solid ${({theme}) => theme.secundary};
    border-bottom: 3px solid ${({theme}) => theme.secundary};
    background: ${({theme}) => theme.bgSecundary};
    cursor: pointer;
    transition: scale 0.1s ease-in;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    margin: 5px;
    margin-bottom: 10px;

    &:hover {
        transform: scale(1.01);
        background: ${({theme}) => theme.hoverChanel};
    }

    img {
        width: 75px;
        height: 75px;
    }

    p:nth-child(2){
        font-weight: bold;
        font-size: 14px;
        color: ${({theme}) => theme.textPrimary};
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        p#chanel{
            color: ${({theme}) => theme.textSecundary};
            font-size: 13px;
        }
        span {
            color: red;
            margin-right: 5px;
        }
    }
    
`;