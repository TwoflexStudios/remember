import styled, {keyframes} from "styled-components";

const fade = keyframes`
    0%{
        opacity: 1;
        box-shadow: 0px 0px 0px;
    }

    25%{
        box-shadow: 0px 0px 0px 1px rgba(50, 168, 72,.3);
    }

    50%{
        box-shadow: 0px 0px 0px 3px rgba(33, 237, 71,.5);
        opacity: 0.5;
        color: rgb(33, 237, 71)
    }
    
    75%{
        box-shadow: 0px 0px 0px 1px rgba(50, 168, 72,.3);
    }

    100%{
        opacity: 1;
        box-shadow: 0px 0px 0px;
    }
`;


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
        div#live {
            color: green;
            background-color: green;
            border-radius: 100%;
            display: fle;
            justify-content: center;
            align-items: center;
            min-height: 5px;
            min-width: 5px;
            margin-right: 10px;
            animation: ${fade} 3s ease-in-out infinite;
        }
    }
    
`;