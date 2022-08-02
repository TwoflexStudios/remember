import styled from "styled-components";

export const ContainerChanel = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 195px);
    justify-content: space-between;
    grid-gap: 10px;
    #loading {
        color: ${({theme}) => theme.textSecundary}
    }
`;

export const ProgramationItem = styled.div`
    min-width: 350px;
    min-height: 95%;
    background: ${({theme}) => theme.bgSecundary};
    border-radius: 10px;
    margin-right: 15px;
    border-left: 3px solid ${({theme}) => theme.secundary};
    border-bottom: 3px solid ${({theme}) => theme.secundary};
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.01);
        background: ${({theme}) => theme.hoverChanel};
    }
    img{
        width: 80px;
        margin-left: 5px;
        margin-right: 10px;
        height: 80px;
    }

    div{
        .title{
            font-weight: bold;
            color: ${({theme}) => theme.textPrimary};
        }

        .date{
            color: ${({theme}) => theme.textSecundary};
        }

        .chanel{
            font-weight: bold;
            color: ${({theme}) => theme.textPrimary};
        }
    }
`;