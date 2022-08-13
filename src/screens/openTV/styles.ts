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

type Props = {
    favorited?: boolean;
}

export const ProgramationItem = styled.div<Props>`
    min-width: 350px;
    min-height: 95%;
    background: ${({theme}) => theme.bgSecundary};
    border-radius: 10px;
    margin-right: 15px;
    border-left: 3px solid ${({theme}) => theme.secundary};
    border-bottom: 3px solid ${({theme}) => theme.secundary};
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: ${({theme}) => theme.hoverChanel};
    }
    img{
        width: 80px;
        margin-left: 5px;
        margin-right: 10px;
        height: 80px;
    }

    .favoriteChanel{
        position: absolute;
        right: 15px;
        z-index: 99;
        top: 15px;
        display: ${({favorited}) => favorited ? "block" : "none"};
        font-size: 18px;
        color: ${({favorited, theme}) => favorited ? theme.primary : theme.textPrimary };
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